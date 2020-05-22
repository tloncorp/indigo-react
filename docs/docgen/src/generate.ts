import * as ts from "typescript";
import * as fs from "fs";
import { outputDirectory } from './config';

type DefaultPropsEntryProperties = {
  name: string, text?: string, kind: number
}

type DefaultPropsEntry = {
  leftExpression:  string,
  leftName:  string,
  properties:  DefaultPropsEntryProperties[],
}

type TypeEntry = {
  name: string,
  isOptional: boolean | null,
  type: string,
  parentName: string
}

type Entry = {
  types: TypeEntry[],
  defaultProps: DefaultPropsEntry[],
  name: string,
  time: Date,
  exports?: string[],
  defaultExport?: string,
  typeNameOfDefaultExport?: string,
}

type Entries = Entry[]

const entry = {
  time: new Date(),
} as Entry

let entries = [] as Entries

// Calls parseFile once on each fileName
const generate = (sourcePaths:string[]) => {
  const tsOptions = {
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS
  }

  sourcePaths.forEach(filepath => {
    parseFile([filepath], tsOptions)
    // const trimmedIndex = trim(index)
  })

  const linkedEntries = entries.map(_entry => link(_entry))

  fs.writeFileSync(`${outputDirectory}/out.docs.json`, JSON.stringify(linkedEntries, undefined, 4));
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
    const leftExpression = node.expression.left.expression.escapedText
    // @ts-ignore
    const leftName = node.expression.left.name.escapedText
    // @ts-ignore
    const rightProperties = node.expression.right.properties
      .map((property: ts.PropertyAssignment) => ({
        // @ts-ignore
        name: property.name.escapedText,
        // @ts-ignore
        text: property.initializer.text,
        kind: property.initializer.kind,
      }))

    const serializedExpression = {
      leftExpression: leftExpression,
      leftName: leftName,
      properties: rightProperties,
    } as DefaultPropsEntry

    if (leftName === 'defaultProps') {
      entry.defaultProps = [...entry.defaultProps, serializedExpression]
    }
  }

  if (ts.isVariableStatement(node)) {
    // @ts-ignore
    const name = node.declarationList.declarations[0].name.escapedText
    entry.name = name
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
    entry.exports = node.exportClause.elements
    // @ts-ignore
      .map(element => element.name.escapedText)
  }

  if (ts.isExportAssignment(node)) {
    // @ts-ignore
    entry.defaultExport = node.expression.escapedText
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

const link = (_entry:Entry) => {

  // _entry.types.map(t => console.log(t))
  
   const sanitizedTypes = _entry.types
    // for some reason there is a null value in this array
    // .map(type => console.log(type))
    .filter((type) => typeof type !== 'undefined')
    .filter((type) => typeof type.parentName !== 'undefined')
    .filter((type) => type.parentName === _entry.typeNameOfDefaultExport)

    const match = entry.defaultProps
      .filter((defaultProp) => typeof defaultProp !== 'undefined')
      .filter(defaultProp => defaultProp.leftExpression === _entry.name)[0]

    // console.log(match)

    const linkedTypes = sanitizedTypes.map(type => {
      const defaultPropProperties = match.properties
        .filter(prop => prop.name === type.name)[0]
      return {
        ...type,
        ...defaultPropProperties,
      }
    })

  return {
    // ..._entry,
    types: linkedTypes,
  }
}

export default generate