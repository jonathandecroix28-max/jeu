const { FlatCompat } = require("@eslint/eslintrc");
const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");

const compat = new FlatCompat();

// 1. On charge les règles de Google
const googleConfig = compat.extends("google");

// 2. On nettoie les règles Google qui n'existent plus dans ESLint 9+
googleConfig.forEach(config => {
    if (config.rules) {
        delete config.rules["valid-jsdoc"];
        delete config.rules["require-jsdoc"];
    }
});

module.exports = [
    // 3. On applique les règles Google nettoyées
    ...googleConfig,

    // 4. On configure la lecture du TypeScript
    {
        files: ["**/*.ts", "!**/tests/**", "**/*.js"],
        languageOptions: {
            parser: tsParser,
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
        },
        rules: {
            "max-len": "off",         // On autorise les lignes de plus de 80 caractères
            "no-unused-vars": "off",  // On autorise les variables déclarées non utilisées
            "guard-for-in": "off",    // On assouplit la règle sur les boucles for-in
            "camelcase": "off"        // On n'oblige pas la casse spécifique sur ce vieux code
        }
    }
];