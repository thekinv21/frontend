import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import * as tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],

      /**
       * Any tipini kullanmaya izin verme
       * @see https://typescript-eslint.io/rules/no-explicit-any/
       * @see https://eslint.org/docs/latest/rules/no-explicit-any
       */
      '@typescript-eslint/no-explicit-any': 'error',

      /**
       * Kullanılmayan değişkenler için hata ver
       * @see https://typescript-eslint.io/rules/no-unused-vars/
       * @see https://eslint.org/docs/latest/rules/no-unused-vars
       */
      '@typescript-eslint/no-unused-vars': 'error',

      /**
       * Boş object ise hata ver
       * @see https://typescript-eslint.io/rules/no-empty-object-type/
       * @see https://eslint.org/docs/latest/rules/no-empty-object-type
       */
      '@typescript-eslint/no-empty-object-type': 'error'
    }
  }
)
