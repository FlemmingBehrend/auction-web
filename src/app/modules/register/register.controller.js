(function() {
    'use strict';

    angular.module('auction.register').controller('RegisterController', RegisterController);

    RegisterController.$inject = [];

    function RegisterController() {

        /*jshint validthis: true*/
        var register = this;
        register.activateForm = activateForm;

        activate();

        function activate() {

        }

        function activateForm() {
            console.log('form activated');
        }

    }

})();
