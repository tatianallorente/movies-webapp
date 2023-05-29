module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"eslint-config-prettier"
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: [
		"react",
		"@typescript-eslint"
	],
	rules: {
		'@typescript-eslint/explicit-function-return-type': 'off',
		'react/react-in-jsx-scope': 'off'
	}
}
