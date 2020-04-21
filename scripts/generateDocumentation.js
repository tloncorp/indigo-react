const fs = require('fs')
const path = require('path')
const ts = require('typescript')

/** Generate documentation for all classes in a set of .ts files */
function generateDocumentation(
  fileNames,
  options
) {
  // Build a program using the set of root file names in fileNames
  let program = ts.createProgram(fileNames, options);

  // Get the checker, we will use it to find more about classes
  let checker = program.getTypeChecker();

  // const mem = {
  //   defaultProps: {
  //
  //   },
  //   exports: {
  //
  //   }
  // }

  const output = {
    props: [],
    imports: [],
    defaultExport: '',
    namedExports: [],
    meta: {
      filesize: 0,
      loc: 0,
    }
  }

  // Visit every sourceFile in the program
  for (const sourceFile of program.getSourceFiles()) {
    if (!sourceFile.isDeclarationFile) {
      // Walk the tree to search for classes
      ts.forEachChild(sourceFile, visit);
    }
  }

  // print out the doc
  fs.writeFileSync("doc.json", JSON.stringify(output, undefined, 2));

  return;

  /** visit nodes finding exported classes */
  function visit(node) {
    // Only consider exported nodes
    if (!isNodeExported(node)) {
      console.log('Node Not Exported')
      return;
    }

    if (ts.isClassDeclaration(node) && node.name) {
      // This is a top level class, get its symbol
      let symbol = checker.getSymbolAtLocation(node.name);
      if (symbol) {
        output.props.push(serializeClass(symbol));
      }
    } else if (ts.isVariableStatement(node)) {
      // Since this is a statement, we need to retrieve the name like so
      // let name = node.declarationList.declarations[0].name
      // let symbol = checker.getSymbolAtLocation(name);
      // if (symbol) {
      //   console.log(symbol)
      // }
      //
    } else if (ts.isExportDeclaration(node)) {
      output.namedExports = node.exportClause.elements.map(element => element.name.escapedText)

    } else if (ts.isExportAssignment(node)) {

      output.defaultExport = node.expression.escapedText

    } else if (ts.isTypeAliasDeclaration(node)) {
      // Since this is a statement, we need to retrieve the name like so
      let type = checker.getTypeAtLocation(node.name)
      if (type) {
        output.props.push(serializeType(type));
      }
      // No need to walk any further, class expressions/inner declarations
      // cannot be exported
    } else if (ts.isModuleDeclaration(node)) {
      // This is a namespace, visit its children
      ts.forEachChild(node, visit);
    }
  }

  /** Serialize a symbol into a json object */
  function serializeSymbol(symbol) {
    return {
      name: symbol.getName(),
      optional: symbol.valueDeclaration.questionToken ? true : false,
      documentation: ts.displayPartsToString(symbol.getDocumentationComment(checker)),
      type: checker.typeToString(
        checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration)
      )
    };
  }

  function serializeType(type) {
    let types = type.types.map(
      type => {
        if (type.symbol.escapedName === "__type") {
          return {
            name: null,
            types: checker.getAugmentedPropertiesOfType(type)
              .map(serializeSymbol),
          }
        } else {
          return {
            name: type.symbol.escapedName,
            types: checker.getAugmentedPropertiesOfType(type)
              .map(serializeSymbol)
          }
        }
      }
    )

    return {
      assignment: type.aliasSymbol.escapedName,
      types: types
    }
  }

  /** Serialize a variable symbol information */
  function serializeVariable(symbol) {
    let details = serializeSymbol(symbol);
    // Get the construct signatures
    let constructorType = checker.getTypeOfSymbolAtLocation(
      symbol,
      symbol.valueDeclaration
    );
    details.constructors = constructorType
      .getConstructSignatures()
      .map(serializeSignature);
    return details;
  }

  /** Serialize a class symbol information */
  function serializeClass(symbol) {
    let details = serializeSymbol(symbol);

    // Get the construct signatures
    let constructorType = checker.getTypeOfSymbolAtLocation(
      symbol,
      symbol.valueDeclaration
    );
    details.constructors = constructorType
      .getConstructSignatures()
      .map(serializeSignature);
    return details;
  }

  /** Serialize a signature (call or construct) */
  function serializeSignature(signature) {
    return {
      parameters: signature.parameters.map(serializeSymbol),
      returnType: checker.typeToString(signature.getReturnType()),
      documentation: ts.displayPartsToString(signature.getDocumentationComment(checker))
    };
  }

  /** True if this is visible outside this file, false otherwise */
  function isNodeExported(node) {
    return (
      (ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Export) !== 0 ||
      (!!node.parent && node.parent.kind === ts.SyntaxKind.SourceFile)
    );
  }
}

generateDocumentation([__dirname + '/tsxtest.tsx'], {
  target: ts.ScriptTarget.ES5,
  module: ts.ModuleKind.CommonJS
});
