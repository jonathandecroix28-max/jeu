const js = require('@eslint/js');
const google = require('eslint-config-google');

module.exports = [
  {
    ignores: [
      'tests/**',
    ],
  },

  // Config Node
  {
    files: ['eslint.config.cjs', 'cypress.config.js', 'logic.js', 'tests.js'],
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

  // Config navigateur pour le jeu (fichiers du jeu)
  {
    files: ['main.js', '**/*.js'],
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

  // Config pour les tests Cypress
  {
    files: ['cypress/e2e/**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'script',
      globals: {
        cy: 'readonly',
        describe: 'readonly',
        it: 'readonly',
      },
    },
  },

  // Config pour le support Cypress import/export
  {
    files: ['cypress/support/**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        cy: 'readonly',
      },
    },
  },
];
