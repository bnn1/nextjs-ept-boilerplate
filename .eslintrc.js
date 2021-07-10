const isProductionEnv = process.env.NODE_ENV === 'production';

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'next',
        'next/core-web-vitals',
        'plugin:prettier/recommended',
    ],
    env: {
        es6: true,
        browser: true,
        jest: true,
        node: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'prettier/prettier': 'error',
        'arrow-body-style': isProductionEnv ? ['error', 'as-needed'] : 0,
        'react/react-in-jsx-scope': 0,
        'react/display-name': 0,
        'react/prop-types': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/member-delimiter-style': 0,
        '@typescript-eslint/no-explicit-any': isProductionEnv ? 2 : 1,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-unused-vars': [
            isProductionEnv ? 2 : 1,
            {
                argsIgnorePattern: '^_',
            },
        ],
        'no-console': [
            isProductionEnv ? 2 : 1,
            {
                allow: ['warn', 'error'],
            },
        ],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
            { blankLine: 'always', prev: ['case', 'default'], next: '*' },
        ],
    },
};
