/** @type {import('jest').Config} */
export default {
    preset: 'jest-expo',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
    testRegex: ['test/.*\\.test\\.tsx?$'],
    verbose: true,
};
