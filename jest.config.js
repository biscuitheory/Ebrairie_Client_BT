module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
  },
  // testMatch: [
  //   '<rootDir>/app/**/*.test.{js, jsx}',
  //   '<rootDir>/test/**/*.test.js'
  // ],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {},
  testEnvironment: "jest-environment-jsdom",
};
