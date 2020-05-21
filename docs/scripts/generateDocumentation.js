const fs = require('fs')
const path = require('path')
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const ts = require('typescript')

const pkg = require('../../package.json')
const ignore = ['.DS_Store', 'util', 'index.tsx', 'index.ts']
const base = __dirname + '/../../src'

function generateFilenames(base) {
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

const _out = {
  props: [],
  imports: [],
  defaultExport: '',
  namedExports: [],
  defaultExportTypePair: {},
}

/** Generate documentation for all classes in a set of .ts files */
function parseFile(
  fileNames,
  options
) {
  // Build a program using the set of root file names in fileNames
  let program = ts.createProgram(fileNames, options);

  // Get the checker, we will use it to find more about classes
  let checker = program.getTypeChecker();

  // Copy the output object
  const out = {..._out}

  // Visit every sourceFile in the program
  for (const sourceFile of program.getSourceFiles()) {
    if (!sourceFile.isDeclarationFile) {
      // Walk the tree
      ts.forEachChild(sourceFile, visit);
    }
  }

  // return the filled output object
  return out


  function visit(node) {
    // Only consider exported nodes
    if (!isNodeExported(node)) {
      console.log('Node Not Exported')
      return;
    }

    console.log(ts.isVariableStatement(node))

    if (ts.isClassDeclaration(node) && node.name) {
      // This is a top level class, get its symbol
      let symbol = checker.getSymbolAtLocation(node.name);
      if (symbol) {
        out.props.push(serializeClass(symbol));
      }
    } else if (ts.isVariableStatement(node)) {
      // ts.getTypeAtLocation
      const name = node.declarationList.declarations[0].name

      console.log( checker.getTypeAtLocation(name))
      // checker.getType
      // checker.getTypeArguments


      // Since this is a statement, we need to retrieve the name like so
      // const defaultExportTypePair = node.declarationList.declarations.map(declaration => {
      //   const name = declaration.name.text
      //   const types = declaration.initializer.parameters
      //     .filter(param => param.type.kind === 169)
      //     .map(n => n.type.typeName.escapedText);
      //   return {[name]: types}
      // })
      // out.defaultExportTypePair = defaultExportTypePair

    } else if (ts.isExportDeclaration(node)) {
      out.namedExports = node.exportClause.elements.map(element => element.name.escapedText)

    } else if (ts.isExportAssignment(node)) {

      out.defaultExport = node.expression.escapedText

    } else if (ts.isTypeAliasDeclaration(node)) {
      // Since this is a statement, we need to retrieve the name like so
      let type = checker.getTypeAtLocation(node.name)
      if (type) {
        out.props.push(serializeType(type));
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
    if (type.types === undefined) return []
    let types = type.types.map(
      type => {
        if (type.symbol === undefined) return {}
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

const trim = (index) => {
  const defaultExport = index.defaultExport


  return index
}

// const getLoc = (path) => {
//   var exec = require('child_process').exec;
//   let out = ''
//   exec(`wc ${path}`, function (error, res) {
//     out = res
//   });
//   return out
// }

async function getLoc(path) {
  try {
    const { stdout, stderr } = await exec(`wc -l ${path} | awk '{print $1}'`);
    if (stderr) console.error(stderr)
    return parseInt(stdout.replace('\n','')) + 1;
  
  } catch (e) {
    console.error(e); // should contain code (exit code) and signal (that caused the termination).
  }
}

const getSize = path => {
  const stats = fs.statSync(path);
  const fileSizeInBytes = stats.size;
  const fileSizeInMegabytes = fileSizeInBytes / 1000.0;
  return fileSizeInMegabytes
}

// Calls parseFile once on each fileName
const generate = (sourcePaths) => {
  const tsOptions = {
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS
  }

  const promises = sourcePaths.map((filepath) => {
    const index = parseFile([filepath], tsOptions)
    // const trimmedIndex = trim(index)

    const dict = {
      index: index,
      // loc: await getLoc(filepath),
      size: getSize(filepath),
      unit: 'kb',
      version: pkg.version,
      time: new Date(),
    }
    // Write output file to disk
    fs.writeFileSync(`./outs/${index.defaultExport}.doc.json`, JSON.stringify(dict, null, '  '))
  })
  
}

// Generate list of sourcefiles to parse later in generate()
const sourcePaths = generateFilenames(base)
const testPath = [sourcePaths[0]]

// entrypoint into program
generate(testPath)
