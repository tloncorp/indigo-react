import * as ts from "typescript";
import * as fs from "fs";
import { outputDirectory } from './config';

type DefaultPropsEntry = {
  leftExpression:  string,
  leftName:  string,
  properties:  {name: string, text?: string, kind: number},
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
  time: Date
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

    // Write output file to disk
    // fs.writeFileSync(`${outputDirectory}/out.doc.json`, JSON.stringify(dict, null, '  '))
  })

  fs.writeFileSync(`${outputDirectory}/out.docs.json`, JSON.stringify(entries, undefined, 4));
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



  if (ts.isClassDeclaration(node) && node.name) {
    // This is a top level class, get its symbol
    // let symbol = checker.getSymbolAtLocation(node.name);
    // if (symbol) {
    //   entry.props.push(serializeClass(symbol, checker));
    // }
    // No need to walk any further, class expressions/inner declarations
    // cannot be exported
  } else if (ts.isModuleDeclaration(node)) {
    // This is a namespace, visit its children
    return ts.forEachChild(node, () => visit(node, checker));
  }

  return undefined

}


/** Serialize a symbol into a json object */
// const serializeSymbol = (symbol: ts.Symbol, checker: ts.TypeChecker): Entry => {
//   return {
//     name: symbol.getName(),
//     documentation: ts.displayPartsToString(symbol.getDocumentationComment(checker)),
//     type: checker.typeToString(
//       checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration)
//     )
//   };
// }

/** Serialize a class symbol information */
// const serializeClass = (symbol: ts.Symbol, checker: ts.TypeChecker) => {
//   let details = serializeSymbol(symbol, checker);

//   // Get the construct signatures
//   let constructorType = checker.getTypeOfSymbolAtLocation(
//     symbol,
//     symbol.valueDeclaration
//   );
//   details.constructors = constructorType
//     .getConstructSignatures()
//     .map(signature => serializeSignature(signature, checker));
//   return details;
// }

/** Serialize a signature (call or construct) */
// const serializeSignature = (signature: ts.Signature, checker: ts.TypeChecker) => {
//   return {
//     parameters: signature.parameters.map(param => serializeSymbol(param, checker)),
//     returnType: checker.typeToString(signature.getReturnType()),
//     documentation: ts.displayPartsToString(signature.getDocumentationComment(checker))
//   };
// }

/** True if this is visible outside this file, false otherwise */
const isNodeExported = (node: ts.Node): boolean => {
  // node as ts.Declaration

  return (
    // @ts-ignore
    (ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Export) !== 0 ||
    (!!node.parent && node.parent.kind === ts.SyntaxKind.SourceFile)
  );
}

// const serializeType = (type:ts.TypeAliasDeclaration, checker:ts.TypeChecker) => {
//   if (type.types === undefined) return []
//   let types = type.types.map(
//     type => {
//       if (type.symbol === undefined) return {}
//       if (type.symbol.escapedName === "__type") {
//         return {
//           name: null,
//           types: checker.getAugmentedPropertiesOfType(type)
//             .map(serializeSymbol),
//         }
//       } else {
//         return {
//           name: type.symbol.escapedName,
//           types: checker.getAugmentedPropertiesOfType(type)
//             .map(serializeSymbol)
//         }
//       }
//     }
//   )

//   return {
//     assignment: type.aliasSymbol.escapedName,
//     types: types
//   }
// }


export default generate