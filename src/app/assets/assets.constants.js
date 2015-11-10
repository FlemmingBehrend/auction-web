(function() {
    'use strict';

    angular.module('auction.assets')
        .constant('serviceHost', 'http://localhost:9081')
        .constant('resourcePath', '/resource')
        .constant('userRegistration', '/user-registration');

})();
