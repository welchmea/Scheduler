// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-console": "off",
      "no-restricted-syntax": [
          "off",
          {
              "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
              "message": "Unexpected property on console object was called"
          }
      ]
    },
    languageOptions : {
      globals: {
        ...globals.browser
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error"
  }
    // ignores: ["availability.js", "server.js", "database.js", "vite.config.ts", "tailwind.config.js", "postcss.config.js", "**/*.css"]
  },
  {
    ignores: ["dist/assets/**.js"]
  }
);
