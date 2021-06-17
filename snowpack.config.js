/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {src: '/'},
  plugins: ['@snowpack/plugin-postcss', '@snowpack/plugin-react-refresh'],
  devOptions: {},
  buildOptions: {metaUrlPath: 'snowpack'},
  alias: {},
  exclude: ['**/node_modules/**/*', '**/*.pxd/**/*'],
}
