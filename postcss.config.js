const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: ['./pages/**/*.js', './pages/**/*.jsx'],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
]

const plugins = ['postcss-import', 'tailwindcss']
const prodPlugins = [
  purgecss,
  'postcss-flexbugs-fixes',
  ['postcss-preset-env', {autoprefixer: {flexbox: 'no-2009'}, stage: 3, features: {'custom-properties': false}}],
]

module.exports = {
  plugins: process.env.NODE_ENV === 'production' ? [...plugins, ...prodPlugins] : plugins,
}
