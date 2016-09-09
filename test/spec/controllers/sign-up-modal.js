'use strict';

describe('Controller: SignUpModalCtrl', function () {

  // load the controller's module
  beforeEach(module('sharemateWebappApp'));

  var SignUpModalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignUpModalCtrl = $controller('SignUpModalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SignUpModalCtrl.awesomeThings.length).toBe(3);
  });
});
