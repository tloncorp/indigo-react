const fs = require("fs");
const path = require("path");

const src = __dirname + "/../src";

const exclude = [
  ".DS_Store",
  "util.ts",
  "index.tsx",
  "index.ts",
  "iconIndex.tsx",
];

const include = [".tsx"];

const excludeExt = [".json", ".md"];

const basicDocjs = (name) => `<${name}> </${name}>`;
const basicReadme = (name) => `
    # ${name}

    ## Purpose

    ## Usage

    ### Related

    | Library      | Github                                    | NPM                                              |
    | ------------ | ----------------------------------------- | ------------------------------------------------ |
    | indigo-light | https://www.github.com/urbit/indigo-light | https://www.npmjs.com/package/@tlon/indigo-light |
    | indigo-dark  | https://www.github.com/urbit/indigo-dark  | https://www.npmjs.com/package/@tlon/indigo-dark  |
    | indigo-react | https://www.github.com/urbit/indigo-react | https://www.npmjs.com/package/@tlon/indigo-react |

    ### License

    MIT License © [Tlon](https://tlon.io)
`;

const sourceFiles = fs
  .readdirSync(src)
  .map((sourcePath) => path.parse(sourcePath))
  // .filter((parsedPath) => include.includes(parsedPath.ext))
  .filter((parsedPath) => !exclude.includes(parsedPath.base))
  .filter((parsedPath) => !excludeExt.includes(parsedPath.ext));

// sourceFiles.map((parsedPath) => fs.mkdirSync(src + "/" + parsedPath.name));

console.log(sourceFiles);

sourceFiles.map((parsedPath) => {
  // const oldPath = src + "/" + parsedPath.base;
  // const newPath = src + "/" + parsedPath.name + "/" + parsedPath.base;
  //   console.log(oldPath, newPath);
  // fs.renameSync(oldPath, newPath, function (err) {
  //   if (err) throw err;
  //   //   console.log('Successfully renamed - AKA moved!')
  // });
  // const readmePath = src + "/" + parsedPath.name + "/" + "README.md";
  const docsJsonPath = src + "/" + parsedPath.name + "/" + "docs.json";

  const docsJsPath = src + "/" + parsedPath.name + "/" + "docs.js";

  if (fs.existsSync(docsJsonPath)) {
    fs.unlinkSync(docsJsonPath);
  }
  // fs.writeFileSync(readmePath, basicReadme(parsedPath.name), "utf8");

  if (fs.existsSync(docsJsPath)) {
    // do something
  } else {
    fs.writeFileSync(docsJsPath, basicDocjs(parsedPath.name), "utf8");
  }
});

// console.log(sourceFiles)
