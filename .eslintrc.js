/** @format */

module.exports = {
  plugins: ["@typescript-eslint", "import", "lodash", "react-hooks"],
  extends: ["turbo", "eslint:recommended"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/display-name": "off",
    "no-undef": "off",
    "no-empty": "warn",
    "no-debugger": "warn",
    "no-sparse-arrays": "warn",
    "no-empty-pattern": "warn",
    "no-useless-escape": "warn",
    "no-case-declarations": "warn",
    "no-extra-boolean-cast": "warn",
    "no-inner-declarations": "warn",
    "no-prototype-builtins": "warn",
    "no-async-promise-executor": "warn",
    "react-hooks/rules-of-hooks": "warn",
    "lodash/import-scope": [2, "method"],
    "react-hooks/exhaustive-deps": "warn",
    "no-unsafe-optional-chaining": "warn",
    "@typescript-eslint/ban-types": "warn",
    "turbo/no-undeclared-env-vars": "warn",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/consistent-type-imports": "warn",
    "sort-imports": ["warn", { ignoreDeclarationSort: true, ignoreCase: true }],
    "import/order": [
      "warn",
      { "newlines-between": "always", alphabetize: { order: "asc" } },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": [0],
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            destructuredArrayIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_",
          },
        ],
      },
    },
  ],
};
