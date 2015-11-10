(function() {
    'use strict';

    angular.module('auction.assets')
        .factory('RegisterResource', RegisterResource);

    RegisterResource.$inject = ['$resource', 'serviceHost', 'userRegistration', 'resourcePath'];

    function RegisterResource($resource, serviceHost, userRegistration, resourcePath) {
        return $resource(serviceHost + userRegistration + resourcePath + '/registration');
    }

})();