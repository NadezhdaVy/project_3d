module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
	'react-refresh/only-export-components': 'warn',
	'consistent-return': 'off',
	'react/require-default-props': 'off',
	'@typescript-eslint/no-unsafe-member-access': 'off',
	'@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
	'@typescript-eslint/no-unsafe-argument': 'off',
	'@typescript-eslint/restrict-template-expressions': 'off',
	'linebreak-style': [0, 'unix'],
	'quotes': ['error', 'double'],
	'semi': ['error', 'always'],
	'default-param-last': 'off',
	'@typescript-eslint/default-param-last': 'off',
	'@typescript-eslint/no-unsafe-assignment': 'off',
	'no-param-reassign': [
	  'error',
	  {
		 'props': true,
		 'ignorePropertyModificationsFor': ['state', 'config']
	  }
	],
 },
}
