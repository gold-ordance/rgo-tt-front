module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["plugin:react/recommended", "airbnb"],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "react-hooks", "simple-import-sort", "import"],
	rules: {
		"linebreak-style": 0,
		quotes: ["error", "double"],
		"no-unused-vars": "warn",
		"object-curly-newline": "off",
		"react/function-component-definition": "off",
		"import/prefer-default-export": "off",
		"import/no-unresolved": "off",
		"import/extensions": "off",
		"import/no-extraneous-dependencies": "off",
		"comma-dangle": "off",
		"no-tabs": "off",
		"react/prop-types": ["off"],
		"react/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": [
			"error",
			{
				extensions: [".js", ".jsx", ".tsx"],
			},
		],
		"simple-import-sort/imports": [
			"error",
			{
				groups: [
					// External packages.
					["^"],
					// Internal packages.
					["^@"],
					// Side effect imports.
					["^\\u0000"],
					// Parent imports.
					["^\\.\\.(?!/?$)", "^\\.\\./?$"],
					// Other relative imports.
					["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
					// Style imports.
					["^.+\\.s?css$"],
				],
			},
		],
		"simple-import-sort/exports": "error",
	},
};
