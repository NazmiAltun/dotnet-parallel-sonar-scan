import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverage: true,
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['jest-extended'],
};

export default config;
