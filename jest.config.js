const config = {
  roots: ["<rootDir>/tests"],
  testPathIgnorePatterns: ["/node_modules/", "/rust-binaries/", "/dist/"],
  collectCoverageFrom: ["./src/**/*.ts"],
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  testMatch: ["**/tests/**/*.test.ts"],
};

module.exports = config;