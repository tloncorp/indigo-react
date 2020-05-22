import * as ts from "typescript";
import * as fs from "fs";
import { outputDirectory } from './config';

const {version} = JSON.parse(
  fs.readFileSync(__dirname + '/../../../package.json', 'utf8')
)

type DefaultPropsEntryProperties = {name: string, text?: string, kind: number} 

type DefaultPropsEntry = {
  leftExpression:  string,
  leftName:  string,
  properties:  {[key: string]: DefaultPropsEntryProperties},
}

type TypeEntry = {
  name: string,
  isOptional: boolean | null,
  type: string,
  parentName: string
}

type Entry = {
  types: TypeEntry[],
  name: string,
  time: Date,
}

type Entries = Entry[]

let entry = {
  types: [],
  name: '',
  time: new Date,
} as Entry

const entryDefault = {
  types: [],
  name: '',
  time: new Date,
} as Entry

type Mem = {
  defaultExport: string
  typeNamesOfDefaultExport: string[]
  exports: string[]
  defaultProps: {[key: string]: DefaultPropsEntry }
  declarationTypePairs: {[key: string]: string }
}

const memDefault = {
  defaultExport: '',
  typeNamesOfDefaultExport: [],
  exports: [],
  defaultProps: {},
  declarationTypePairs: {},
} as Mem

let mem = {
  defaultExport: '',
  typeNamesOfDefaultExport: [],
  exports: [],
  defaultProps: {},
  declarationTypePairs: {},
} as Mem

let entries = [] as Entries

// Calls parseFile once on each fileName
const generate = (sourcePaths:string[]) => {
  const tsOptions = {
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS
  }

  sourcePaths.forEach(filepath => {
    console.log(filepath)

    parseFile([filepath], tsOptions)
    
    const linkedEntry = entries.map(_entry => merge(mem, _entry))[0]
    
    fs.writeFileSync(`${outputDirectory}/${linkedEntry.name}.docs.json`, JSON.stringify(linkedEntry, undefined, 4));

    mem = {...memDefault}
    entry = {...entryDefault}
    entries = []

  })

  // const linkedEntries = entries.map(_entry => merge(mem, _entry))

  // fs.writeFileSync(`${outputDirectory}/out.docs.json`, JSON.stringify(linkedEntries, undefined, 4));
}

/** Generate documentation for all classes in a set of .ts files */
function parseFile(
  fileNames: string[],
  options: ts.CompilerOptions
): void {
  // Build a program using the set of root file names in fileNames
  let program = ts.createProgram(fileNames, options);

  // Get the checker, we will use it to find more about classes
  let checker = program.getTypeChecker();

  // Visit every sourceFile in the program
  for (const sourceFile of program.getSourceFiles()) {
    if (!sourceFile.isDeclarationFile) {
      // Walk the tree to search for classes
      ts.forEachChild(sourceFile, (file) => visit(file, checker));
    }
  }
  entries = [...entries, entry]
  return;
}


/** visit nodes finding exported classes */
const visit = (node: ts.Node, checker: ts.TypeChecker):void => {
  // Only consider exported nodes
  if (!isNodeExported(node)) {
    return undefined
  }

  if (ts.isExpressionStatement(node)) {
    // @ts-ignore
    const leftExpression = node.expression.left.expression.escapedText as string
    // @ts-ignore
    const leftName = node.expression.left.name.escapedText as string
    // @ts-ignore
    const rightProperties = node.expression.right.properties
      .reduce((acc:{[key: string]: DefaultPropsEntryProperties}, property: ts.PropertyAssignment) => {
        const newEntry = {
          // @ts-ignore
          name: property.name.escapedText as string,
          // @ts-ignore
          text: property.initializer.text,
          kind: property.initializer.kind,
        }as DefaultPropsEntryProperties

        acc[newEntry.name] = newEntry
        return acc
      }, {})

    const serializedExpression = {
      leftExpression: leftExpression,
      leftName: leftName,
      properties: rightProperties,
    }

    if (leftName === 'defaultProps') {
      mem.defaultProps = {
        ...mem.defaultProps,
        [serializedExpression.leftExpression]: serializedExpression
      }
    }
  }

  if (ts.isVariableStatement(node)) {
    if (node.declarationList.declarations[0].initializer === undefined) return
    if (node.declarationList.declarations[0].name === undefined) return

    // @ts-ignore
    const name = node.declarationList.declarations[0].name.escapedText
    let typeNames = [] as string[]
    
    // Tagged Template Expression
    // @ts-ignore
    if (node.declarationList.declarations[0].initializer.kind === 198) {
      // @ts-ignore
      const _typeNames = node.declarationList.declarations[0].initializer.typeArguments
        // @ts-ignore
        .map(typeReference => typeReference.typeName.escapedText)
      typeNames = [...typeNames, ..._typeNames]
    }

    // Arrow Function
    if (node.declarationList.declarations[0].initializer.kind === 202) {
      // @ts-ignore
      const _typeNames = node.declarationList.declarations[0].initializer.parameters
        // @ts-ignore
        .map(parameter => parameter.type.typeName.escapedText)
      typeNames = [...typeNames, ..._typeNames]
    }

    entry.name = name

    mem.declarationTypePairs = {
      ...mem.declarationTypePairs,
      [name]: typeNames,
    } 
  }

  // Look for type alias definitions. Once found, get the properties of the definition and serialize to <TypeEntry>
  if (ts.isTypeAliasDeclaration(node)) {
    const parentName = node.name.escapedText as string
    const type = checker.getTypeAtLocation(node.name)
    const apparentProperties = type.getApparentProperties()
    const serializations = apparentProperties.map(symbol => {

      const declarations = symbol.getDeclarations()
      
      const isOptional = declarations
        // @ts-ignore
        ? declarations[0].questionToken
        ? true
        : false
        : null
      
        const type = checker.typeToString(
          checker.getTypeOfSymbolAtLocation(
            symbol, 
            symbol.valueDeclaration
            )
        )
      
      const serializedType = {
        name: symbol.getName(),
        isOptional,
        type,
        parentName
      }

      return serializedType
    })
    entry.types = [...entry.types, ...serializations]
    return
  }

  if (ts.isExportDeclaration(node)) {
    // @ts-ignore
    mem.exports = node.exportClause.elements
    // @ts-ignore
      .map(element => element.name.escapedText)
  }

  if (ts.isExportAssignment(node)) {
    // @ts-ignore
    mem.defaultExport = node.expression.escapedText
  }

  if (ts.isClassDeclaration(node) && node.name) {
    // No need to walk any further, class expressions/inner declarations
    // cannot be exported
  }
  
  if (ts.isModuleDeclaration(node)) {
    // This is a namespace, visit its children
    return ts.forEachChild(node, () => visit(node, checker));
  }

  return undefined
}

/** True if this is visible outside this file, false otherwise */
const isNodeExported = (node: ts.Node): boolean => {
  // node as ts.Declaration
  return (
    // @ts-ignore
    (ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Export) !== 0 ||
    (!!node.parent && node.parent.kind === ts.SyntaxKind.SourceFile)
  );
}

// type Entry = {
//   types: TypeEntry[],
//   defaultProps: DefaultPropsEntry[],
//   name: string,
//   time: Date,
//   exports?: string[],
//   defaultExport?: string
// }

const merge = (_mem:Mem, _entry:Entry) => {
  // console.log(_mem)

  const declarationTypePairOfDefaultExport = _mem.declarationTypePairs[_mem.defaultExport][0]

  // Remove types that do not belong to the default export
  const typesOfDefaultExport = _entry.types
    .filter(type => type.parentName === declarationTypePairOfDefaultExport)


  // If there are no defaultProps to merge into entry, just return the entry
  if (typeof _mem.defaultProps[_mem.defaultExport] === 'undefined') {
    return {
      types: typesOfDefaultExport,
      name: _entry.name,
      time: _entry.time,
      version,
    } 
  }

  const defaultPropsOfDefaultExport = _mem.defaultProps[_mem.defaultExport].properties
    
  // Add defaultProps information to each type if avalible
  const typesWithDefaults = typesOfDefaultExport
    .map(type => {
      const defaultInfo = defaultPropsOfDefaultExport[type.name]
      return {
        ...type,
        ...defaultInfo,
      }
    })

  return {
    types: typesWithDefaults,
    name: _entry.name,
    time: _entry.time,
    version,
  }
}

export default generate