import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  js.configs.recommended,

  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'object-curly-newline': 'off',
    },
  },
]);
