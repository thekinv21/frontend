// @ts-check

import { createIndependentModules } from 'eslint-plugin-project-structure'

/**
 * @param {string} folderName
 */
const createEntityRule = folderName => ({
  name: `${folderName} folder`,
  pattern: `src/entities/${folderName}/**`,
  allowImportsFrom: [
    '{family_3}/**/!(index.ts)',
    'src/shared/**/index.ts',
    `src/entities/**/@x/${folderName}.ts`
  ],
  errorMessage: `Entities may only: (1) import within their own folder, (2) use another entity through its @x/${folderName} folder inside the target entity, or (3) import from shared modules through their public api (index.ts). Direct entity-to-entity imports are not allowed and imports within the entity folder from index.ts are not allowed.`
})

export const independentModulesConfig = createIndependentModules({
  modules: [
    {
      name: 'App folder',
      pattern: 'src/app/**',
      allowImportsFrom: [
        '{family_1}/**/!(index.ts)',
        'src/entities/**/index.ts',
        'src/features/**/index.ts',
        'src/pages/**/index.ts',
        'src/shared/**/index.ts',
        'src/widgets/**/index.ts'
      ],
      errorMessage: `App may only import from its own family (at least 1 common path part), entities, features, pages, shared or widgets modules through their public api (index.ts). Imports within the app folder from index.ts are not allowed.`
    },
    {
      name: 'Features',
      pattern: 'src/features/**',
      allowImportsFrom: [
        '{family_3}/**/!(index.ts)',
        'src/entities/**/index.ts',
        'src/widgets/**/index.ts',
        'src/shared/**/index.ts'
      ],
      errorMessage:
        'A feature may only import from its own family (at least 3 common path parts), entities, widgets, shared modules through their public api (index.ts). Imports within the feature folder from index.ts are not allowed.'
    },

    /**
     * Pages folder imports rules
     */
    {
      name: 'Pages',
      pattern: 'src/pages/**',
      allowImportsFrom: [
        '{family_3}/**/!(index.ts)',
        'src/entities/**/index.ts',
        'src/features/**/index.ts',
        'src/widgets/**/index.ts',
        'src/shared/**/index.ts'
      ],
      errorMessage: `Pages may only import from its own family (at least 3 common path parts), entities, features, widgets, shared modules through their public api (index.ts). Imports within the pages folder from index.ts are not allowed.`
    },

    /**
     * Entities rules
     */
    createEntityRule('user'),
    createEntityRule('role'),

    /**
     * Unknown entity rules
     */
    {
      name: 'Unknown entity',
      pattern: 'src/entities/**',
      allowImportsFrom: [],
      allowExternalImports: false,
      errorMessage:
        'This entity is not specified as an independent module in independentModules.mjs. Use createEntityRule function.'
    },

    /**
     * Shared folder imports rules
     */
    {
      name: 'Shared',
      pattern: ['src/shared/**'],
      allowImportsFrom: ['{family}/**'],
      errorMessage: 'Shared modules can only import from other shared modules.'
    },

    /**
     * Widgets folder imports rules
     */
    {
      name: 'Widgets',
      pattern: 'src/widgets/**',
      allowImportsFrom: [
        '{family_3}/**/!(index.ts)',
        'src/entities/**/index.ts',
        'src/features/**/index.ts',
        'src/shared/**/index.ts'
      ],
      errorMessage:
        'Widgets may only import from their own family (at least 3 common path parts), entities, features, shared modules through their public api (index.ts). Imports within the widgets folder from index.ts are not allowed.'
    },

    /**
     * Unknown files rules
     */

    {
      name: 'Unknown files',
      pattern: [['src/**', '!src/*']],
      allowImportsFrom: [],
      allowExternalImports: false,
      errorMessage:
        'This file is not specified as an independent module in independentModules.jsonc.'
    }
  ]
})
