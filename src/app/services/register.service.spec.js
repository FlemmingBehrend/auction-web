(function() {
    'use strict';

    describe('Service: register', function() {

        var cut, httpBackend;

        beforeEach(module('auction.services'));

        beforeEach(inject(function (register, $httpBackend) {
            cut = register;
            httpBackend = $httpBackend;
        }));

        afterEach(function () {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        it('can be initialized', function() {
            expect(cut).toBeDefined();
        });

        describe('exposes service', function() {
            
            it('register user', function() {
                expect(cut.hasOwnProperty('registerUser')).toBe(true);
            });

        });

        describe('can execute', function() {

            it('a post to registerUser', inject(function(serviceHost, userRegistration, resourcePath) {
                httpBackend.expectPOST(serviceHost + userRegistration + resourcePath + '/registration').respond({called:true});
                var ok = false;
                cut.registerUser({}).then(function (response) {
                    ok = response.called;
                });
                httpBackend.flush();
                expect(ok).toBe(true);
            }));

        });

    });

})();
