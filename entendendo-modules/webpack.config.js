const path = require("path");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "tchelinux-spa-bundle.js"
  },
  mode: "none"
};

module.exports = config;
