/**
 * @type {import('@types/eslint').Linter.Config}
 */
module.exports = {
  extends: [
    require.resolve('@blitzjs/next/eslint'),
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort', 'import', 'unused-imports'],
  rules: {
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    // tailwind eslint plugin
    'tailwindcss/no-custom-classname': 'off',
    // import sorts
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports first
          ['^\\u0000'],
          // Node.js builtins
          [`^(${require('module').builtinModules.join('|')})(/|$)`],
          // React first, then any other packages
          ['^react$', '^@?\\w'],
          // Absolute imports (doesn"t start with .)
          ['^(\\.|@)prisma', '^[^.]', '^src/'],
          // Relative imports
          [
            '^app(/.*|$)',
            // ../whatever/
            '^\\.\\./(?=.*/)',
            // ../
            '^\\.\\./',
            // ./whatever/
            '^\\./(?=.*/)',
            // Anything that starts with a dot
            '^\\.',
          ],
          // Asset imports
          ['^.+\\.(html|scss|sass|css|json|gql|graphql|md|jpg|png)$'],
        ],
      },
    ],
  },
};
