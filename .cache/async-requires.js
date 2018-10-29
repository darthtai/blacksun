// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/home/taiyang/Development/blacksun-site/.cache/dev-404-page.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/home/taiyang/Development/blacksun-site/src/pages/404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/home/taiyang/Development/blacksun-site/src/pages/index.js"),
  "component---src-pages-page-der-js": require("gatsby-module-loader?name=component---src-pages-page-der-js!/home/taiyang/Development/blacksun-site/src/pages/page-der.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/home/taiyang/Development/blacksun-site/.cache/json/layout-index.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/home/taiyang/Development/blacksun-site/.cache/json/dev-404-page.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/home/taiyang/Development/blacksun-site/.cache/json/404.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/home/taiyang/Development/blacksun-site/.cache/json/index.json"),
  "page-der.json": require("gatsby-module-loader?name=path---page-der!/home/taiyang/Development/blacksun-site/.cache/json/page-der.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/home/taiyang/Development/blacksun-site/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/home/taiyang/Development/blacksun-site/.cache/layouts/index.js")
}