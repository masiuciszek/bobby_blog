const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/masiuciszek/web-dev/myWebProj/jonkri_blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/masiuciszek/web-dev/myWebProj/jonkri_blog/src/pages/404.tsx"))),
  "component---src-pages-about-tsx": hot(preferDefault(require("/Users/masiuciszek/web-dev/myWebProj/jonkri_blog/src/pages/about.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/masiuciszek/web-dev/myWebProj/jonkri_blog/src/pages/index.tsx")))
}

