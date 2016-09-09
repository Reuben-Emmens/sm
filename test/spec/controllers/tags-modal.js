'use strict';

describe('Controller: TagsModalCtrl', function () {

  // load the controller's module
  beforeEach(module('sharemateWebappApp'));

  var TagsModalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TagsModalCtrl = $controller('TagsModalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TagsModalCtrl.awesomeThings.length).toBe(3);
  });
});
