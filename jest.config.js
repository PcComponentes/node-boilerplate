module.exports = {
  roots: ["<rootDir>"],
  testMatch: ["**/__test__/**/*.+(test).(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleDirectories: [".", "src", "node_modules"],
  testTimeout: 30000,
};
