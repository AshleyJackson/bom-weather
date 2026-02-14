import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default [
	// Base ESLint recommended rules
	eslint.configs.recommended,
	
	// Custom configuration for TypeScript files
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsparser,
			parserOptions: {
				project: './tsconfig.json',
				ecmaVersion: 2022,
				sourceType: 'module',
			},
			globals: {
				...globals.node,
			},
		},
		plugins: {
			'@typescript-eslint': tseslint,
		},
		rules: {
			// TypeScript recommended rules
			...tseslint.configs.recommended.rules,
			// Allow empty classes (for static utility classes)
			'@typescript-eslint/no-extraneous-class': 'off',
			// Disable no-undef for TypeScript as TypeScript handles this
			'no-undef': 'off',
		},
	},
	
	// Prettier config to disable conflicting rules
	prettierConfig,
	
	// Ignore patterns
	{
		ignores: [
			'dist/**',
			'node_modules/**',
			'*.js',
			'*.mjs',
			'scripts/**/*.js',
		],
	},
];
