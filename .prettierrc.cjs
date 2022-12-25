// const tailwind = require("./support/prettier-plugin-tailwindcss");
// const organizeImports = require("prettier-plugin-organize-imports");
// const astro = require("prettier-plugin-astro");

module.exports = {
  bracketSpacing: false,
  printWidth: 120,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [
    'prettier-plugin-pkg',
    'prettier-plugin-organize-imports',
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
  ],

  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
