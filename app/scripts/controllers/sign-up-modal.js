'use strict';

/**
 * @ngdoc function
 * @name sharemateWebappApp.controller:SignUpModalCtrl
 * @description
 * # SignUpModalCtrl
 * Controller of the sharemateWebappApp
 */
angular.module('sharemateWebappApp')
  .controller('SignUpModalCtrl', function ($scope, $uibModalInstance) {
   

  	$scope.close = function() {
      $uibModalInstance.dismiss('cancel');
    };
    


  });
