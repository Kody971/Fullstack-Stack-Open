import globals from "globals";
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import stylisticJs from "@stylistic/eslint-plugin";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

export default [
  { languageOptions: { globals: globals.node } },
  js.configs.recommended,
  eslintPluginPrettier,
  {
    rules: {
      "capitalized-comments": ["error", "always"],
    },
  },
];
