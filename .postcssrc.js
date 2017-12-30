// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-import": {},
    "postcss-cssnext": {},
    "postcss-utilities": {},
    "postcss-conditionals": {},
    "postcss-nested": {},
    "postcss-css-variables": {},
    "postcss-bem-linter": {
      preset: 'bem', 
      presetOptions: { 
        namespace: 'vigo' 
      }
    }
  }
}
