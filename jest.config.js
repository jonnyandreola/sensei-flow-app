const transform = {
	'^.+\\.svelte$': [
		'svelte-jester',
		{
			'preprocess': true
		}
	],
	'^.+\\.ts$': 'ts-jest',
	'^.+\\.js$': 'babel-jest'
}

const transformIgnorePatterns = [
	'node_modules/(?!(.*(svelte-spa-router))/)'
]

const moduleFileExtensions = [
	'js',
	'ts',
	'svelte'
]

const setupFilesAfterEnv = [
	'@testing-library/jest-dom/extend-expect'
]

module.exports = {
	transform,
	transformIgnorePatterns,
	moduleFileExtensions,
	setupFilesAfterEnv
}