import path from "path";
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import typescript from "@rollup/plugin-typescript";

const resolvePath = (str) => path.resolve(__dirname, str);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "indigo-react",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "styled-components",
        "styled-system",
        "@styled-system/css",
        "formik",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "reactDom",
          "styled-components": "styled",
          formik: "formik",
          "styled-system": "system",
          "@styled-system/css": "css",
        },
      },
      plugins: [
        typescript({
          target: "es2020",
          rootDir: resolvePath("src"),
          declaration: true,
          declarationDir: resolvePath("dist"),
          exclude: resolvePath("node_modules/**"),
          allowSyntheticDefaultImports: true,
        }),
      ],
    },
  },
});
