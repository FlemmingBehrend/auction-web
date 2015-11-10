(function() {
    'use strict';

    angular.module('auction.services').factory('registerService', registerService);

    registerService.$inject = ['$log', '$q', 'RegisterResource'];

    function registerService($log, $q, RegisterResource) {

        var service = {
            registerUser: registerUser
        };

        return service;

        function registerUser(user) {
            $log.info('register user: ' + angular.toJson(user));
            var deferred = $q.defer();
            var promise = RegisterResource.save(user).$promise;
            promise.then(function (data) {
                deferred.resolve(data);
            }).catch(function (error) {
                $log.error(error);
            });
            return deferred.promise;
        }

    }

})();