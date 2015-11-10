(function() {
    'use strict';

    angular.module('auction.assets')
        .factory('RegisterResource', RegisterResource);

    RegisterResource.$inject = ['$resource', 'serviceHost', 'resourcePath'];

    function RegisterResource($resource, serviceHost, resourcePath) {
        return $resource(serviceHost + 'user-registration' + resourcePath);
    }

})();