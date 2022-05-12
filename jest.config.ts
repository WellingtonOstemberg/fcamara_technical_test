export default {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/store/**/*.{ts,tsx}',
    '!src/react-app-env.d.ts',
    '!src/reportWebVitals.ts',
    '!src/setupTests.ts',
  ],
  coveragePathIgnorePatterns: [
    'src/pages/',
    'src/components/index.ts',
    'src/hooks/index.ts',
    'src/utils/index.ts',
    'src/ts/',
    'src/redux/',
    'src/routes/',
    'src/services/',
    'src/styles/',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}
