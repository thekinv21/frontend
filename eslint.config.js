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
      '@typescript-eslint/no-empty-object-type': 'error',

      /**
       * Tiplerin doğru kullanıldığından emin ol
       * @see https://typescript-eslint.io/rules/consistent-type-definitions/
       * @see https://eslint.org/docs/latest/rules/consistent-type-definitions
       */

      '@typescript-eslint/ban-types': [
        'error',
        {
          extendDefaults: true,
          types: {
            Function: 'Use a specific function type instead',
            Object: 'Use object instead',
            Boolean: 'Use boolean instead',
            Number: 'Use number instead',
            String: 'Use string instead',
            Symbol: 'Use symbol instead',
            any: false,
            '{}': false
          }
        }
      ],

      /**
       * Async kullanımında await kullanmayı zorunlu kılar
       * @see https://typescript-eslint.io/rules/require-await/
       * @see https://eslint.org/docs/latest/rules/require-await
       */
      '@typescript-eslint/require-await': 'error',

      /**
       * Diziler'den eleman silindiğinde hata ver
       * @see https://typescript-eslint.io/rules/no-array-delete/
       * @see https://eslint.org/docs/latest/rules/no-array-delete
       */
      '@typescript-eslint/no-array-constructor': 'error',

      /**
       * Kullanılmayan import'lar için hata ver
       * @see https://typescript-eslint.io/rules/no-unused-vars/
       * @see https://eslint.org/docs/latest/rules/no-unused-vars
       */
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],

      /**
       * Typescript kurallarını ihmal etme
       * @see https://typescript-eslint.io/rules/ban-ts-comment/
       * @see https://eslint.org/docs/latest/rules/ban-ts-comment
       */
      '@typescript-eslint/ban-ts-comment': 'error',

      /**
       * Çokla'nan tip bileşenleri için hata ver
       * @see https://typescript-eslint.io/rules/no-duplicate-type-constituents/
       * @see https://eslint.org/docs/latest/rules/no-duplicate-type-constituents
       */
      '@typescript-eslint/no-duplicate-type-constituents': 'error',

      /**
       * Enum çoklama'lara izin verme
       * @see https://typescript-eslint.io/rules/no-duplicate-enum-values/
       * @see https://eslint.org/docs/latest/rules/no-duplicate-enum-values
       */
      '@typescript-eslint/no-duplicate-enum-values': 'error'
    }
  }
)
