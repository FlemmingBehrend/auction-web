(function () {
    'use strict';

    angular.module('auction').config(configure);

    configure.$inject = ['$mdThemingProvider', '$translateProvider'];

    function configure($mdThemingProvider, $translateProvider) {
        $mdThemingProvider.theme('default');
        $translateProvider.
            translations('da', danishTranslations).
            translations('en', englishTranslations).
            preferredLanguage('da').
            useSanitizeValueStrategy('escaped');
    }

})();
