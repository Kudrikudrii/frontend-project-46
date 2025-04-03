import { defineConfig } from 'eslint-define-config';
import globals from 'globals';
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs}'] },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      js,
      import: importPlugin,
    },
    extends: ['js/recommended'],
    rules: {
      'no-shadow': 'off',
      'object-curly-newline': 'off',
    },
  },
]);
