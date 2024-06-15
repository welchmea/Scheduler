// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

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
      parserOptions: {
        project: ['./tsconfig.json']
      }
    },
    ignores: ["dist/*", "vite.config.ts", "tailwind.config.js", "postcss.config.js"]
  }
);
