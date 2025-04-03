import globals from 'globals';
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';

export default [
  // Базовый рекомендованный конфиг от ESLint
  js.configs.recommended,

  // Ваши кастомные настройки
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      'no-shadow': 'off',
      'object-curly-newline': 'off',
      // Добавьте другие правила по необходимости
    },
  },
];
