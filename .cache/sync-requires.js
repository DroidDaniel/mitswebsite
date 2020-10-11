const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/daniel.disowsa/Desktop/mitsogo/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/daniel.disowsa/Desktop/mitsogo/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/daniel.disowsa/Desktop/mitsogo/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/daniel.disowsa/Desktop/mitsogo/src/pages/index.js"))),
  "component---src-pages-mac-os-js": hot(preferDefault(require("/Users/daniel.disowsa/Desktop/mitsogo/src/pages/mac_os.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/daniel.disowsa/Desktop/mitsogo/src/pages/using-typescript.tsx")))
}
