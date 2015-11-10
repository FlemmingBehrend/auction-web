(function() {
    'use strict';

    angular.module('auction.services').factory('register', register);

    register.$inject = ['$log', '$q', 'RegisterResource'];

    function register($log, $q, RegisterResource) {

        var service = {
            registerUser: registerUser
        };

        return service;

        function registerUser(user) {
            $log.info('register user: ' + angular.toJson(user));

        }

    }

})();