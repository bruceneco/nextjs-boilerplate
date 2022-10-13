module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.ts(x)?', '!**/*.stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
