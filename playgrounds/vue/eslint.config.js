import myConfigs from "@my/configs/eslint";
import { defineConfig } from "eslint/config";
import pluginVue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";
import vueParser from "vue-eslint-parser";

export default defineConfig(pluginVue.configs["flat/recommended"], myConfigs, {
  name: "playground-vue",
  files: ["**/*.vue"],
  languageOptions: {
    parser: vueParser,
    sourceType: "module",
    ecmaVersion: "latest",
    parserOptions: {
      parser: tseslint.parser,
      extraFileExtensions: [".vue"],
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
});
