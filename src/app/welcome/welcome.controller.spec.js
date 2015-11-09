(function() {
    'use strict';

    var cut, scope;

    beforeEach(module('auction.welcome'));

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope;
    }));

    function createController(ctrl) {
        cut = (function () {
            return ctrl('WelcomeController', {
                $scope: scope
            });
        })();
        return cut;
    }

    describe('initialization', function() {

        it('create the controller', inject(function($controller) {
            cut = createController($controller);
            expect(cut).toBeDefined();
        }));

    });

})();
