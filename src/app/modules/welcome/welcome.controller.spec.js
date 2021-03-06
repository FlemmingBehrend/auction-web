(function() {
    'use strict';

    describe('Controller: welcome', function() {

        var cut, scope, ctrl;

        beforeEach(module('auction.welcome'));

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope;
            ctrl = $controller;
        }));

        function createController() {
            cut = (function () {
                return ctrl('WelcomeController', {
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
