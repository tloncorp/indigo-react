const fs = require("fs");
const path = require("path");

const src = __dirname + "/../src";

const sourceFiles = fs
  .readdirSync(src)
  .map((sourcePath) => path.parse(sourcePath));

console.log(sourceFiles);
