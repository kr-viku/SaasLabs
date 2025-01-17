import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
};

export default config;
