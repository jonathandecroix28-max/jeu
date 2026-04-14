const js = require('@eslint/js');
const google = require('eslint-config-google');

module.exports = [
  // uniquement ignores
  {
    ignores: [
      'playwright.config.js',
      'tests/**',
    ],
  },

  // Config Node (pour eslint.config.cjs, logic.js, tests.js)
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'script',
      globals: {
        require: 'readonly',
        module: 'readonly',
      },
    },
  },

  js.configs.recommended,
  google,

  // Config navigateur pour le jeu
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'script',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        requestAnimationFrame: 'readonly',
        location: 'readonly',
      },
    },
    rules: {
      'valid-jsdoc': 'off',
      'require-jsdoc': 'off',
      'max-len': 'off',
    },
  },
];
