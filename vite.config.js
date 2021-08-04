import path from "path";
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import typescript from "@rollup/plugin-typescript";

const resolvePath = (str) => path.resolve(__dirname, str);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  optimizeDeps: {
    include: ["./tailwind.config.js"],
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "indigo-react",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "formik"],
      output: {
        globals: {
          react: "React",
          "react-dom": "reactDom",
          formik: "formik",
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
