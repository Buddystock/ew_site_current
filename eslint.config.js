/**@type {import('eslint').Linter.Config} */
// eslint-disable-next-line no-undef

 module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
	],
   extends: [
    "next/core-web-vitals",
		'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked'
	],
	rules: {
		'semi': [2, "always"],
		'@typescript-eslint/no-unused-vars': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'@typescript-eslint/no-non-null-assertion': 0,
	}
};
