(function() {
    'use strict';

    describe('Controller: register', function() {

        var cut, scope, ctrl;

        beforeEach(module('auction.register'));

        beforeEach(module(function ($provide) {
            $provide.value('registerService', jasmine.createSpy);
        }));

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope;
            ctrl = $controller;
        }));

        function createController() {
            cut = (function () {
                return ctrl('RegisterController', {
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
