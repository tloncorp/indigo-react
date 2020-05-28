import * as ts from "typescript";
import * as fs from "fs";
import * as path from 'path';
import { ParsedPath } from 'path'
import { stdout } from './util'
import { propertyDirectory } from './config';
import {
  DefaultPropsEntryProperties,
  Entry,
  Entries,
  Mem,
} from './types'

const {version} = JSON.parse(
  fs.readFileSync(__dirname + '/../../../package.json', 'utf8')
)

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
const generateProperties = (sourcePaths:ParsedPath[]) => {
  const tsOptions = {
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS
  }

  sourcePaths.forEach(parsedPath => {
    // Destructure parsedPath
    const {
      root,
      dir,
      base
    } = parsedPath

    // const splitDir = dir.split(path.sep)

    // Get the name of the file's immediate directory. This will be the name of the component category
    // const componentCategory = splitDir[splitDir.length - 1]
    
    // Join the output root with the component category name
    // const outputDir = path.join(propertyDirectory, componentCategory)

    // The main method. Accepts a file, collects attributes from it and adds those attributes to the global entries and mem
    parseFile(
      path.join(root, dir, base),
      tsOptions
    )
    
    // Merge metadata into the entries array
    const completeEntry = entries.map(_entry => merge(mem, _entry))[0]
    
    // Again join the output directory with the filename and extension for the full output path
    const outputPath = path.format({
      root: '/',
      dir: propertyDirectory,
      name: completeEntry.name,
      ext: '.json'
    })

    // Print the name of the current file task
    stdout('→ ' + completeEntry.name);

    // Serialize the entry to strings
    const outputData = JSON.stringify(completeEntry, undefined, 4)

    // Check if the output directory exists. If not, create it.
    if (!fs.existsSync(propertyDirectory)) {
      fs.mkdirSync(propertyDirectory);
    }
    
    // Write the file to disk
    fs.writeFileSync(outputPath, outputData);

    // The following instantiates the metadata directories, but is only needed a single time
    // if (!fs.existsSync(`${metadataDirectory}/${componentCategory}`)) {
    //   fs.mkdirSync(`${metadataDirectory}/${componentCategory}`);
    // }
    // fs.writeFileSync(`${metadataDirectory}/${componentCategory}/${completeEntry.name}.metadata.json`, `{ code: "" }`);

    // Finally, clear working vars to prepare for next file input
    mem = {...memDefault}
    entry = {...entryDefault}
    entries = []
  })
}

// Generate documentation for all classes in a set of .ts files. In this case, we accept a single .ts file.
function parseFile(
  filePath: string,
  options: ts.CompilerOptions
): void {

  // Build a program using the set of root file names in fileNames
  let program = ts.createProgram([filePath], options);

  // Get the checker, we will use it to find more about classes
  let checker = program.getTypeChecker();

  // Visit every sourceFile in the program. Pass the root node to the recursive visit function along with the checker.
  for (const sourceFile of program.getSourceFiles()) {
    if (!sourceFile.isDeclarationFile) {
      // Walk the tree to search for classes
      ts.forEachChild(sourceFile, (node) => visit(node, checker));
    }
  }
  // append the result entry to the global entries array
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
        ?.map(typeReference => typeReference.typeName?.escapedText)
      typeNames = [...typeNames, ..._typeNames]
    }

    // Arrow Function
    if (node.declarationList.declarations[0].initializer.kind === 202) {
      // @ts-ignore
      const _typeNames = node.declarationList.declarations[0].initializer.parameters
        // @ts-ignore
        ?.map(parameter => parameter.type.typeName?.escapedText)
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

const merge = (_mem:Mem, _entry:Entry) => {

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

export default generateProperties