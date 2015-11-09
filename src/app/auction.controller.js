(function() {
    'use strict';

    angular.module('auction').controller('AuctionController', AuctionController);

    AuctionController.$inject = ['$translate'];

    function AuctionController($translate) {

        /*jshint validthis: true*/
        var auction = this;
        auction.changeToDanish = changeToDanish;
        auction.changeToEnglish = changeToEnglish;

        function activate() {

        }

        function changeToDanish() {
            $translate.use('da');
        }

        function changeToEnglish() {
            $translate.use('en');
        }

    }

})();