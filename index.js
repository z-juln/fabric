"use strict";

const platform = require("os").platform();

module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 开启全局 script 模式
      impliedStrict: true,
    },
  },
  settings: {
    //自动发现React的版本，从而进行规范react代码
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  plugins: ["prettier", "@typescript-eslint", "react", "react-hooks"],
  // 以当前目录为根目录，不再向上查找 .eslintrc.js
  root: true,
  rules: {
    "no-console": "off",
    "prefer-spread": ["warn"],
    "no-extra-semi": ["warn"],
    quotes: ["error", "single"],
    "linebreak-style": ["darwin", "linux"].includes(platform)
      ? ["warn", "unix"]
      : 0,
    "comma-dangle": "off",
    "arrow-parens": "off",
    "no-alert": "off",
    camelcase: "off",
    // 箭头函数的箭头前后必须有空格
    "arrow-spacing": [
      2,
      {
        before: true,
        after: true,
      },
    ],
    "init-declarations": "off",
    "no-unused-vars": "off",

    // react 自定义规则
    "react/prop-types": 0,
    "react/jsx-uses-react": 2,
    "react/no-did-update-set-state": 2,
    "react/no-redundant-should-component-update": 2,
    "react/no-will-update-set-state": 2,
    "react/require-render-return": 2,
    "react/jsx-closing-bracket-location": [2, { selfClosing: "tag-aligned" }],
    "react/jsx-key": 2,
    "react/jsx-no-bind": "off",
    "react/jsx-pascal-case": 2,
    "react/jsx-uses-vars": 2,
    "react-hooks/rules-of-hooks": "error",
    "react/react-in-jsx-scope": 0,

    /**
     * 禁止使用 console
     */
    "no-console": "off",
    "prefer-spread": ["warn"],
    "no-extra-semi": ["warn"],
    quotes: ["error", "single"],
    "linebreak-style": ["warn", "unix"],
    "comma-dangle": "off",
    "arrow-parens": "off",
    "no-alert": "off",
    camelcase: "off",
    // 箭头函数的箭头前后必须有空格
    "arrow-spacing": [
      2,
      {
        before: true,
        after: true,
      },
    ],

    // 自定义ts规则
    "@typescript-eslint/init-declarations": "off",
    /*
    eslint no-unused-vars didn't work at typescript
    https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-vars.md
    */
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_+$",
        varsIgnorePattern: "^_+$",
        caughtErrorsIgnorePattern: "^_+$",
      },
    ],
    "prettier/prettier": "error",
  },
};
