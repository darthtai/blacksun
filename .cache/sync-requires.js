// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("D:/Dev Me/blacksun/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("D:\\Dev Me\\blacksun\\.cache\\dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("D:\\Dev Me\\blacksun\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("D:\\Dev Me\\blacksun\\src\\pages\\index.js")),
  "component---src-pages-page-der-js": preferDefault(require("D:\\Dev Me\\blacksun\\src\\pages\\page-der.js"))
}

exports.json = {
  "layout-index.json": require("D:\\Dev Me\\blacksun\\.cache\\json\\layout-index.json"),
  "dev-404-page.json": require("D:\\Dev Me\\blacksun\\.cache\\json\\dev-404-page.json"),
  "404.json": require("D:\\Dev Me\\blacksun\\.cache\\json\\404.json"),
  "index.json": require("D:\\Dev Me\\blacksun\\.cache\\json\\index.json"),
  "page-der.json": require("D:\\Dev Me\\blacksun\\.cache\\json\\page-der.json"),
  "404-html.json": require("D:\\Dev Me\\blacksun\\.cache\\json\\404-html.json")
}