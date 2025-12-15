import myConfigs from "@my/configs/eslint";
import { defineConfig } from "eslint/config";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default defineConfig(
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  reactHooks.configs.flat["recommended-latest"],
  myConfigs,
  {
    name: "playground-react",
    settings: {
      react: {
        version: "detect",
      },
    },
  },
);
