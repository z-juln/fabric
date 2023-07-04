"use strict";

const platform = require("os").platform();

module.exports = {
  singleQuote: true,
  trailingComma: "all",
  printWidth: 100,
  proseWrap: "never",
  endOfLine: ["darwin", "linux"].includes(platform) ? "lf" : "auto",
  overrides: [
    {
      files: ".prettierrc",
      options: {
        parser: "json",
      },
    },
    {
      files: "document.ejs",
      options: {
        parser: "html",
      },
    },
  ],
};
