const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "",

  // 生产环境 sourceMap
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  },
  devServer: {
    host: "localhost",
    port: 10000
  }
};
