import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import prettierConfig from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig(
  { ignores: ["**/dist/**"] },
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  prettierConfig,
  {
    name: "main",
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2022,
      },
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_", // 允许以 _ 开头的变量
          argsIgnorePattern: "^_", // 允许以 _ 开头的函数参数
          caughtErrorsIgnorePattern: "^_", // 允许以 _ 开头的 try-catch 错误
          destructuredArrayIgnorePattern: "^_", // 允许数组解构的 _ 变量
          ignoreRestSiblings: true, // 允许忽略解构时的剩余属性
        },
      ],
    },
  },
);
