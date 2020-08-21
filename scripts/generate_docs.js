const fs = require("fs");
const path = require("path");

const src = __dirname + "/../src";
const out = __dirname + "/../docs/public/componentData";
const public = __dirname + "/../docs/public";

const include = [""];
const exclude = [
  ".DS_Store",
  "util.ts",
  "index.tsx",
  "index.ts",
  "iconIndex.tsx",
  "themes",
];

const sourceFiles = fs
  .readdirSync(src)
  .map((sourcePath) => path.parse(sourcePath))
  .filter((parsedPath) => !exclude.includes(parsedPath.base))
  .filter((parsedPath) => include.includes(parsedPath.ext));
const basicDocjson = (name) => `{
    "snippet": "<${name}> </${name}>"
  }`;

function lowercaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

sourceFiles.map((parsedPath) => {
  const componentExampleJs = fs.readFileSync(
    src + "/" + parsedPath.base + "/" + "docs.js",
    { encoding: "utf8" }
  );
  const id = lowercaseFirstLetter(parsedPath.base);
  const displayName = parsedPath.base;
  const data = {
    id,
    displayName,
    snippet: componentExampleJs,
    props: [],
  };

  fs.writeFileSync(out + "/" + id + ".json", JSON.stringify(data), "utf8");
});

// const stats = {
//   componentCount: sourceFiles.length
// }
// fs.writeFileSync(public + '/' + 'stats' + '.json', JSON.stringify(stats), "utf8");

const components = sourceFiles.map((parsedPath) => {
  const k = lowercaseFirstLetter(parsedPath.base);
  const displayName = parsedPath.base;
  return {
    id: k,
    displayName,
  };
});

const manifest = {
  componentCount: sourceFiles.length,
  components: components,
};

fs.writeFileSync(
  public + "/" + "manifest" + ".json",
  JSON.stringify(manifest),
  "utf8"
);
