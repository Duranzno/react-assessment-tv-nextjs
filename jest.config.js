module.exports = {
  moduleFileExtensions: ['json', 'js', 'jsx', 'ts', 'tsx'],
  testMatch: ['**/*.(test|spec).(ts|tsx)'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
      babelConfig: true,
      diagnostics: false,
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
  // setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  preset: 'ts-jest',
};
