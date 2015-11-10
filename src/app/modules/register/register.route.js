(function() {
    'use strict';

    angular.module('auction').config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider
            .state('auction.register', {
                url: '/register',
                templateUrl: 'app/modules/register/register.html',
                controller: 'RegisterController',
                controllerAs: 'register'
            });
    }

})();
