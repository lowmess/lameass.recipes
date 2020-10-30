module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run serve',
      startServerReadyPattern:
        'ready - started server on http://localhost:3000',
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/recipes',
        'http://localhost:3000/recipes/manhattan',
        'http://localhost:3000/categories',
        'http://localhost:3000/tags',
        'http://localhost:3000/about',
      ],
      upload: {
        target: 'temporary-public-storage',
      },
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'unused-javascript': 'off',
        'tap-targets': 'warn',
        'errors-in-console': 'warn', // not sure where this is coming from
      },
    },
  },
}
