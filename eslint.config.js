import globals from 'globals';
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    // Применяем рекомендованный конфиг с переопределением правил
    ...js.configs.recommended,
    rules: {
      ...js.configs.recommended.rules,
      'object-curly-newline': 'off', // Полностью отключаем правило
    },
  },
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
      // 'object-curly-newline' больше не нужно отключать здесь, так как мы отключили его глобально
    },
  },
];
