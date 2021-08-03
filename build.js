const { build } = require("esbuild");
const { EsmExternalsPlugin } = require("@esbuild-plugins/esm-externals");

console.log(typeof EsmExternalsPlugin);

build({
  bundle: true,
  splitting: true,
  sourcemap: true,
  outdir: "dist",
  format: "esm",
  target: "es2017",
  entryPoints: ["./src/index.tsx"],
  external: [
    "react",
    "react-dom",
    "react-is",
    "styled-system",
    "styled-components",
    "@styled-system/css",
    "formik",
  ],
  plugins: [EsmExternalsPlugin({ externals: ["@reach/menu-button"] })],
});
