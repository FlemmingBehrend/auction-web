(function () {
    'use strict';

    angular.module('auction', [
        'ngMaterial',
        'ngMessages',
        'ngResource',
        'ui.router',
        'pascalprecht.translate',
        'auction.constants',
        'auction.welcome',
        'auction.register',
        'auction.login'
    ]);

})();
