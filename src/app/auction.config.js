(function () {
    'use strict';

    angular.module('auction').config(configure);

    configure.$inject = ['$mdThemingProvider', '$translateProvider', '$mdIconProvider', '$httpProvider'];

    function configure($mdThemingProvider, $translateProvider, $mdIconProvider, $httpProvider) {
        $mdThemingProvider.theme('default');
        $translateProvider.
            translations('da', danishTranslations).
            translations('en', englishTranslations).
            preferredLanguage('da').
            useSanitizeValueStrategy('escaped');
        $mdIconProvider
            .icon('eng', 'http://localhost:9000/app/eng.svg');
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.defaults.headers.get = {'Content-Type': 'application/json, text/html', 'If-Modified-Since': 0};
    }

})();
