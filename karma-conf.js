module.exports = function (config) {

    var path = require('path');

    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        files: [
            // Matchers

            // Third lib dependencies
            'src/bower_components/jquery/dist/jquery.js',
            'src/bower_components/lodash/lodash.js',
            'src/bower_components/angular/angular.js',
            'src/bower_components/angular-resource/angular-resource.js',
            'src/bower_components/angular-mocks/angular-mocks.js',
            'src/bower_components/angular-animate/angular-animate.js',
            'src/bower_components/angular-aria/angular-aria.js',
            'src/bower_components/angular-material/angular-material.js',
            'src/bower_components/angular-messages/angular-messages.js',
            'src/bower_components/angular-ui-router/release/angular-ui-router.js',
            'src/bower_components/angular-translate/angular-translate.js',

            // Root module
            'src/app/auction.module.js',
            'src/app/auction.config.js',

            // Welcome module
            'src/app/welcome/welcome.module.js',
            'src/app/welcome/welcome.route.js',
            'src/app/welcome/welcome.controller.js',
            'src/app/welcome/welcome.controller.spec.js',

            // Register module
            'src/app/register/register.module.js',
            'src/app/register/register.route.js',
            'src/app/register/register.controller.js',
            'src/app/register/register.controller.spec.js',

            // Login module
            'src/app/login/login.module.js',
            'src/app/login/login.route.js',
            'src/app/login/login.controller.js',
            'src/app/login/login.controller.spec.js',

            // services

            // common modules
            'src/app/auction.constants.js'

        ],
        exclude: [
            'src/**/*.ico',
            'src/app/auction.config.js'
        ],
        preprocessors: {
            'src/main/app/**/*.js': ['coverage'],
            'src/main/app/**/*.html': ['ng-html2js']
        },
        ngHtml2JsPreprocessor: {
            stripPrefix: 'src/'
        },
        reporters: ['progress', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher-nonet',
            'karma-ng-html2js-preprocessor',
            'karma-coverage'
        ],
        coverageReporter: {
            dir: 'karma-coverage/',
            reporters: [
                {type: 'cobertura', subdir: 'cobertura'},
                {type: 'html', subdir: 'html'}
            ]
        },
        singleRun: true,
        browserNoActivityTimeout: 60000
    });

};