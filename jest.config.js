/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  roots: ["<rootDir>/src", "<rootDir>/tests"],
  testPathIgnorePatterns: ["/node_modules/", "/rust-binaries/", "/dist/"],
  collectCoverageFrom: ["./src/**/*.ts"],
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  testMatch: ["**/tests/**/*.test.ts"],
};

export default config;