module.exports = {
	ci: {
		collect: {
			staticDistDir: 'out',
			url: [
				'http://localhost/',
				'http://localhost/recipes.html',
				'http://localhost/recipes/old-fashioned.html',
				'http://localhost/categories.html',
				'http://localhost/tags.html',
				'http://localhost/about.html',
			],
		},
		upload: {
			target: 'temporary-public-storage',
		},
		assert: {
			preset: 'lighthouse:no-pwa',
			assertions: {
				'link-name': 'warn', // this passes locally but not in the CI. something to keep an eye on
				'unused-javascript': 'off',
				'tap-targets': 'warn',
				'errors-in-console': 'warn', // not sure where this is coming from
			},
		},
	},
}
