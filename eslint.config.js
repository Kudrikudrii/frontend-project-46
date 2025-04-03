import globals from 'globals';
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';

export default [
  // Базовый рекомендованный конфиг ESLint
  js.configs.recommended,

  // Ваши кастомные настройки
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      'no-underscore-dangle': [
        'error',
        {
          allow: ['__filename', '__dirname'],
        },
      ],
      'import/extensions': [
        'error',
        {
          js: 'always',
        },
      ],
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'no-console': 'off',
      'import/no-extraneous-dependencies': 'off',
      'object-curly-newline': 'off', // Если нужно отключить
    },
  },
];
