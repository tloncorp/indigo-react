import * as ts from "typescript";
import * as fs from "fs";
import * as util from "util"

// import pkg from "../../package.json"

const ignore = ['.DS_Store', 'util', 'index.tsx', 'index.ts']
const base = __dirname + '/../../src'

function generateFilenames(base:string) {
  return fs
    .readdirSync(base)
    // Filter files like DS_Store
    .filter(obj => !ignore.includes(obj))
    // Weakly filter files
    .filter(obj => !obj.includes('.'))
    .reduce((acc, dir) => {
      const filepaths = fs
        .readdirSync(base + '/' + dir)
        // Filter files like DS_Store
        .filter(obj => !ignore.includes(obj))
        .map(filename => base + '/' + dir + '/' + filename)
      return [...acc, ...filepaths]
    }, [])
}

interface Entry {
  name?: string;
  fileName?: string;
  documentation?: string;
  type?: string;
  constructors?: Entry[];
  parameters?: Entry[];
  returnType?: string;
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
  let output: Entry[] = [];

  // Visit every sourceFile in the program
  for (const sourceFile of program.getSourceFiles()) {
    if (!sourceFile.isDeclarationFile) {
      // Walk the tree to search for classes
      ts.forEachChild(sourceFile, visit);
    }
  }

  // print out the doc
  fs.writeFileSync("classes.json", JSON.stringify(output, undefined, 4));

  return;

  /** visit nodes finding exported classes */
  function visit(node: ts.Node) {
    // Only consider exported nodes
    if (!isNodeExported(node)) {
      return;
    }

    if (ts.isClassDeclaration(node) && node.name) {
      // This is a top level class, get its symbol
      let symbol = checker.getSymbolAtLocation(node.name);
      if (symbol) {
        output.push(serializeClass(symbol));
      }
      // No need to walk any further, class expressions/inner declarations
      // cannot be exported
    } else if (ts.isModuleDeclaration(node)) {
      // This is a namespace, visit its children
      ts.forEachChild(node, visit);
    }
  }

  /** Serialize a symbol into a json object */
  function serializeSymbol(symbol: ts.Symbol): Entry {
    return {
      name: symbol.getName(),
      documentation: ts.displayPartsToString(symbol.getDocumentationComment(checker)),
      type: checker.typeToString(
        checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration)
      )
    };
  }

  /** Serialize a class symbol information */
  function serializeClass(symbol: ts.Symbol) {
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
  function serializeSignature(signature: ts.Signature) {
    return {
      parameters: signature.parameters.map(serializeSymbol),
      returnType: checker.typeToString(signature.getReturnType()),
      documentation: ts.displayPartsToString(signature.getDocumentationComment(checker))
    };
  }

  /** True if this is visible outside this file, false otherwise */
  function isNodeExported(node: ts.Node): boolean {
    // node as ts.Declaration

    return (
      // @ts-ignore
      (ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Export) !== 0 ||
      (!!node.parent && node.parent.kind === ts.SyntaxKind.SourceFile)
    );
  }
}

// Calls parseFile once on each fileName
const generate = (sourcePaths:string[]) => {
  const tsOptions = {
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS
  }

  sourcePaths.forEach(filepath => {
    const index = parseFile([filepath], tsOptions)
    // const trimmedIndex = trim(index)

    const dict = {
      index: index,
      // loc: await getLoc(filepath),
      // size: getSize(filepath),
      unit: 'kb',
      // version: pkg.version,
      time: new Date(),
    }
    // Write output file to disk
    fs.writeFileSync(`./outs/out.doc.json`, JSON.stringify(dict, null, '  '))
  })
  
}

// Generate list of sourcefiles to parse later in generate()
const sourcePaths = generateFilenames(base)
const testPath = [sourcePaths[0]]

// entrypoint into program
generate(testPath)