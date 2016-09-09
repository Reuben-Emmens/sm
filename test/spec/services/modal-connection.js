'use strict';

describe('Service: modalConnection', function () {

  // load the service's module
  beforeEach(module('sharemateWebappApp'));

  // instantiate service
  var modalConnection;
  beforeEach(inject(function (_modalConnection_) {
    modalConnection = _modalConnection_;
  }));

  it('should do something', function () {
    expect(!!modalConnection).toBe(true);
  });

});
