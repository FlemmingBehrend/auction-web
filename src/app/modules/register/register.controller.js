(function() {
    'use strict';

    angular.module('auction.register').controller('RegisterController', RegisterController);

    RegisterController.$inject = ['registerService'];

    function RegisterController(registerService) {

        /*jshint validthis: true*/
        var register = this;

        activate();

        function activate() {
            register.activateForm = function (user) {
                registerService.registerUser(user).then(function (response) {
                    console.log(response);
                }).catch(function () {
                    console.log('error registering user');
                });
            };
        }

    }

})();
