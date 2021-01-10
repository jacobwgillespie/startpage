/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {src: '/'},
  plugins: ['@snowpack/plugin-postcss', '@snowpack/plugin-react-refresh'],
  install: [],
  installOptions: {},
  devOptions: {},
  buildOptions: {metaDir: 'snowpack'},
  proxy: {},
  alias: {},
}
