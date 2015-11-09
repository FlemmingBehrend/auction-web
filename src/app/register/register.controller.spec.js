(function() {
    'use strict';

    var cut, scope;

    beforeEach(module('auction.register'));

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope;
    }));

    function createController(ctrl) {
        cut = (function () {
            return ctrl('RegisterController', {
                $scope: scope
            });
        })();
        return cut;
    }

    describe('initialization', function() {

        it('can create the controller', inject(function($controller) {
            cut = createController($controller);
            expect(cut).toBeDefined();
        }));

    });

})();
