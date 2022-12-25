/* eslint-env node */

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: ['plugin:astro/recommended'],

  rules: {
    // 'sort-imports': 'error',
    'unused-imports/no-unused-imports': 'error',
  },

  plugins: ['unused-imports'],

  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },

    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/consistent-type-imports': 'warn',
      },
    },
  ],
}
