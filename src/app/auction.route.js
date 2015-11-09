(function() {
    'use strict';

    angular.module('auction').config(routes);

    routes.$inject = ['$urlRouterProvider', '$stateProvider', '$httpProvider'];

    function routes($urlRouterProvider, $stateProvider, $httpProvider) {
        $stateProvider
            .state('auction', {
                url: '/auction',
                templateUrl: 'app/auction.html',
                abstract: true
            });
        $urlRouterProvider.otherwise('auction/');
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.defaults.headers.get = {'Content-Type': 'application/json, text/html', 'If-Modified-Since': 0};
    }

})();
