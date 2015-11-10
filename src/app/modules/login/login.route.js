(function() {
    'use strict';

    angular.module('auction').config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider
            .state('auction.login', {
                url: '/login',
                templateUrl: 'app/modules/login/login.html',
                controller: 'LoginController',
                controllerAs: 'login'
            });
    }

})();
