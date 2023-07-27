
"use strict";

module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-css-modules",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-declaration-block-no-ignored-properties"],
  rules: {
    "import-notation": null,
    "no-descending-specificity": null,
    "function-url-quotes": "always",
    "selector-attribute-quotes": "always",
    "selector-class-pattern": null,
    "font-family-no-missing-generic-family-keyword": null, // iconfont
    "plugin/declaration-block-no-ignored-properties": true,
    "unit-no-unknown": [true, { ignoreUnits: ["rpx"] }],
    "selector-type-no-unknown": null,
    "value-keyword-case": ["lower", { ignoreProperties: ["composes"] }],
    "alpha-value-notation": null,
    "color-function-notation": "legacy", // 使用rgba()
  },
  overrides: [
    {
      files: ["*.scss", "**/*.scss", "*.module.scss", "**/*.module.scss"],
      customSyntax: "postcss-scss",
    },
    {
      files: ["*.less", "**/*.less", "*.module.less", "**/*.module.less"],
      customSyntax: "postcss-less",
    },
  ],
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts"],
};
