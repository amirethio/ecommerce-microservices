/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  // Tells Jest to look for tests only in the src folder
  roots: ["<rootDir>/src"],
  
  // Handles the TypeScript transpilation
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {
      tsconfig: "tsconfig.json",
    }],
  },

  // Matches any .test.ts or .spec.ts files
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts$",
  moduleFileExtensions: ["ts", "js", "json", "node"],

  // Coverage reporting (crucial for your 90-day journey progress)
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/*.d.ts",
    "!src/server.ts",
    "!src/utils/logger.ts" // Don't test the logger itself
  ],

  // Mocking: If you use absolute paths in tsconfig (e.g., @utils/...), 
  // you'll need moduleNameMapper here.
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
};