(function() {
    'use strict';

    describe('Controller: Login', function () {

        var cut, scope, ctrl;

        beforeEach(module('auction.login'));

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope;
            ctrl = $controller;
        }));

        function createController() {
            cut = (function () {
                return ctrl('LoginController', {
                    $scope: scope
                });
            })();
            return cut;
        }

        describe('initialization', function() {

            it('can create the controller', function() {
                cut = createController();
                expect(cut).toBeDefined();
            });

        });

    });

})();
