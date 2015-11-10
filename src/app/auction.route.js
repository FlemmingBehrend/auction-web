(function() {
    'use strict';

    angular.module('auction').config(routes);

    routes.$inject = ['$urlRouterProvider', '$stateProvider'];

    function routes($urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('auction', {
                url: '/auction',
                templateUrl: 'app/auction.html',
                abstract: true
            });
        $urlRouterProvider.otherwise('auction/');
    }

})();
