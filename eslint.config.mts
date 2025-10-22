import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import nextPlugin from "@next/eslint-plugin-next";
import cssPlugin from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      next: nextPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      // React rules
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,

      // ✅ Manually add Next.js rules
      "@next/next/google-font-display": "warn",
      "@next/next/google-font-preconnect": "warn",
      "@next/next/next-script-for-ga": "warn",
      "@next/next/no-async-client-component": "error",
      "@next/next/no-before-interactive-script-outside-document": "error",
      "@next/next/no-document-import-in-page": "error",
      "@next/next/no-head-element": "error",
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "warn",
      "@next/next/no-page-custom-font": "warn",
      "@next/next/no-script-component-in-head": "error",
      "@next/next/no-styled-jsx-in-document": "warn",
      "@next/next/no-sync-scripts": "warn",
      "@next/next/no-title-in-document-head": "warn",
      "@next/next/no-unwanted-polyfillio": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  tseslint.configs.recommended,
  {
    files: ["**/*.css"],
    plugins: {
      css: cssPlugin,
    },
    languageOptions: {
      language: "css",
    },
    rules: {
      ...cssPlugin.configs.recommended.rules,
    },
  },
]);