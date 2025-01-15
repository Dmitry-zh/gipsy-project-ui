module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
    env: {
        browser: true,
        es2022: true,
        node: true,
    },
    extends: [
        '@feature-sliced',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
    ],
    plugins: [
        'react-refresh',
        '@typescript-eslint',
        'import',
        'sort-exports',
        'react',
        'react-hooks',
        'jsx-a11y',
    ],
    ignorePatterns: ['dist/*', 'coverage/*'],
    rules: {
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'sort-exports/sort-exports': [
            'error',
            { sortDir: 'asc', sortExportKindFirst: 'type' },
        ],
        '@typescript-eslint/no-explicit-any': 'error',
        'sort-imports': [
            'error',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: true,
            },
        ],
        'import/order': [
            2,
            {
                pathGroups: [
                    'app',
                    'processes',
                    'pages',
                    'widgets',
                    'features',
                    'entities',
                ].map((layer) => ({
                    pattern: `**/?(*)${layer}{,/**}`,
                    group: 'internal',
                })),
                pathGroupsExcludedImportTypes: ['builtin'],
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'no-restricted-imports': [
            'error',
            {
                paths: [
                    {
                        name: 'lodash',
                        message:
                            'Use import of specific functions, for example \'import omit from "lodash/omit"\'.',
                    },
                ],
            },
        ],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/jsx-sort-props': [
            'error',
            {
                callbacksLast: true,
                shorthandFirst: true,
                ignoreCase: true,
                noSortAlphabetically: true,
                reservedFirst: true,
            },
        ],
        'jsx-a11y/alt-text': [
            'warn',
            {
                elements: ['img'],
                img: ['Image'],
            },
        ],
        'jsx-a11y/aria-props': 'warn',
        'jsx-a11y/aria-proptypes': 'warn',
        'jsx-a11y/aria-unsupported-elements': 'warn',
        'jsx-a11y/role-has-required-aria-props': 'warn',
        'jsx-a11y/role-supports-aria-props': 'warn',
        'react/jsx-curly-brace-presence': 'error',
        'react-refresh/only-export-components': 'warn',
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                prefer: 'no-type-imports',
                disallowTypeAnnotations: false,
            },
        ],
    },
}

