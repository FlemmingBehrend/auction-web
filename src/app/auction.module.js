(function () {
    'use strict';

    angular.module('auction', [
        'ngMaterial',
        'ngMessages',
        'ngResource',
        'ui.router',
        'pascalprecht.translate',
        'auction.assets',
        'auction.services',
        'auction.welcome',
        'auction.register',
        'auction.login'
    ]);

})();
