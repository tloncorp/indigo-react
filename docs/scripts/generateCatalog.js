const fs = require('fs')
const path = require('path')
// const ts = require('typescript')

/** Generate documentation for all classes in a set of .ts files */
function generateCatalog(
  fileNames,
  options
) {
  // Build a program using the set of root file names in fileNames
  // let program = ts.createProgram(fileNames, options);

  // // Get the checker, we will use it to find more about classes
  // let checker = program.getTypeChecker();

  // const mem = {
  //   defaultProps: {
  //
  //   },
  //   exports: {
  //
  //   }
  // }

  // const output = {
  //   sections: [
  //     {
  //       title: ''
  //     }
  //   ]
  // }

  // Visit every sourceFile in the program
  // for (const sourceFile of program.getSourceFiles()) {
  //   if (!sourceFile.isDeclarationFile) {
  //     // Walk the tree to search for classes
  //     ts.forEachChild(sourceFile, visit);
  //   }
  // }

  // print out the doc
  fs.writeFileSync("doc.json", JSON.stringify(output, undefined, 2));

  return;

  /** visit nodes finding exported classes */
  

generateCatalog([__dirname + '/tsxtest.tsx'], {
  target: ts.ScriptTarget.ES5,
  module: ts.ModuleKind.CommonJS
});
