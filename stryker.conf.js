module.exports = function(config) {
    config.set({
        mutate: [
            'src/**/*.js',
            '!src/**/middleware/*.js',
            '!src/**/routes/*.js',
            '!src/**/controllers/*.js',
            '!src/**/services/index.js',
            '!src/**/config/*.js',
            '!src/app.js',
        ],
        mutator: 'javascript',
        packageManager: 'npm',
        reporters: ['clear-text', 'dots'], // see https://stryker-mutator.io/stryker/plugins#reporters
        testRunner: 'mocha',
        mochaOptions: {
            // skip api tests because (1) ports clash, and (2) unit tests should catch everything
            spec: ['./test/unit/**/*.test.js'],
        },
        transpilers: [],
        testFramework: 'mocha',
        coverageAnalysis: 'perTest',
        thresholds: { high: 95, low: 80, break: 80 },
    });
};
