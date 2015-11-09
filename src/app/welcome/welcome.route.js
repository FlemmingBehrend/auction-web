(function() {
    'use strict';

    angular.module('auction').config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider
            .state('auction.welcome', {
                url: '/',
                templateUrl: 'app/welcome/welcome.html',
                controller: 'WelcomeController',
                controllerAs: 'welcome'
            });
    }

})();
