module.exports = function (config) {

    var path = require('path');

    return config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        files: [
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

            // assets module
            'src/app/assets/assets.module.js',
            'src/app/assets/assets.constants.js',
            'src/app/assets/assets.resources.js',

            // services
            'src/app/services/services.module.js',
            'src/app/services/register.service.js',

            // Welcome module
            'src/app/modules/welcome/welcome.module.js',
            'src/app/modules/welcome/welcome.route.js',
            'src/app/modules/welcome/welcome.controller.js',
            'src/app/modules/welcome/welcome.controller.spec.js',

            // Register module
            'src/app/modules/register/register.module.js',
            'src/app/modules/register/register.route.js',
            'src/app/modules/register/register.controller.js',
            'src/app/modules/register/register.controller.spec.js',

            // Login module
            'src/app/modules/login/login.module.js',
            'src/app/modules/login/login.route.js',
            'src/app/modules/login/login.controller.js',
            'src/app/modules/login/login.controller.spec.js'
        ],
        exclude: [
            'src/**/*.ico',
            'src/app/assets/asserts.config.js',
            'src/app/assets/asserts.resources.js'
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