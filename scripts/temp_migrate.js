const fs = require("fs");
const path = require("path");
// {
//     "id": "action",
//     "displayName": "Action",
//     "snippet": "<Action>Action</Action>",
//     "props": []
//   }
const src = __dirname + "/../src";

const exclude = [
  ".DS_Store",
  "util.ts",
  "index.tsx",
  "index.ts",
  "iconIndex.tsx",
];

const include = [".tsx"];

const basicDocTs = (name) => `export const snippet = '<${name}> </${name}>';`;
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
  .filter((parsedPath) => include.includes(parsedPath.ext))
  .filter((parsedPath) => !exclude.includes(parsedPath.base));

sourceFiles.map((parsedPath) => fs.mkdirSync(src + "/" + parsedPath.name));

sourceFiles.map((parsedPath) => {
  const oldPath = src + "/" + parsedPath.base;
  const newPath = src + "/" + parsedPath.name + "/" + parsedPath.base;
  //   console.log(oldPath, newPath);
  fs.renameSync(oldPath, newPath, function (err) {
    if (err) throw err;
    //   console.log('Successfully renamed - AKA moved!')
  });
  const readmePath = src + "/" + parsedPath.name + "/" + "README.md";
  const docsTsPath = src + "/" + parsedPath.name + "/" + "docs.ts";
  fs.writeFileSync(readmePath, basicReadme(parsedPath.name), "utf8");
  fs.writeFileSync(docsTsPath, basicDocTs(parsedPath.name), "utf8");
});

// console.log(sourceFiles)
