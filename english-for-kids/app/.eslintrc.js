module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-typescript'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
  ],
  rules: {
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unused-expressions": ["error"],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/quotes": [
      "error",
      "single",
      {
        "avoidEscape": true
      }
    ],
    "@typescript-eslint/semi": [
      "error",
      "always"
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/dot-notation": "off",
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "camelcase": "error",
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "eol-last": "error",
    "semi": "error",
    "id-blacklist": [
      "error",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined"
    ],
    "id-match": "error",
    "import/order": ["error", {
      "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
      "pathGroups": [
        {
          "pattern": "@/**/*.pcss",
          "group": "index"
        },
        {
          "pattern": "@/**",
          "group": "internal"
        }
      ],
      "newlines-between": "always",
      "alphabetize": {
        "order": "asc",
        "caseInsensitive": false
      }
    }],
    "max-len": [
      "error",
      {
        "code": 100,
        "ignorePattern": "\\s*<",
        "ignoreComments": true,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreTrailingComments": true,
        "ignoreUrls": true
      }
    ],
    "quotes": [
      "error",
      "single"
    ],
    "dot-notation":"off",
    "no-console": "error",
    "no-alert": "error",
    "no-var": "error",
    "no-duplicate-imports": "error",
    "no-multiple-empty-lines": "error",
    "no-await-in-loop": "off",
    "prefer-const": "error",
    "prefer-destructuring": [
      "error",
      {
        "array": false,
        "object": true
      }
    ],
    "radix": "error",
    "react/prop-types": "off",
    "react/jsx-filename-extension": [1, {
      "extensions": [".ts", ".tsx"]
      }
    ],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never"
      }
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        "markers": [
          "/"
        ]
      }
    ],
    "react/prop-types": "off",
    // 'linebreak-style': ['error', process.env.NODE_ENV === 'prod' ? 'unix' : 'windows'],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
