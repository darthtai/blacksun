// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/taiyang/Development/blacksun-site/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/taiyang/Development/blacksun-site/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/taiyang/Development/blacksun-site/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/taiyang/Development/blacksun-site/src/pages/index.js")),
  "component---src-pages-page-der-js": preferDefault(require("/home/taiyang/Development/blacksun-site/src/pages/page-der.js"))
}

exports.json = {
  "layout-index.json": require("/home/taiyang/Development/blacksun-site/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/home/taiyang/Development/blacksun-site/.cache/json/dev-404-page.json"),
  "404.json": require("/home/taiyang/Development/blacksun-site/.cache/json/404.json"),
  "index.json": require("/home/taiyang/Development/blacksun-site/.cache/json/index.json"),
  "page-der.json": require("/home/taiyang/Development/blacksun-site/.cache/json/page-der.json"),
  "404-html.json": require("/home/taiyang/Development/blacksun-site/.cache/json/404-html.json")
}