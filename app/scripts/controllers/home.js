'use strict';

/**
 * @ngdoc function
 * @name shareMateWebappApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the shareMateWebappApp
 */
angular.module('sharemateWebappApp')
  .controller('HomeCtrl', function ($scope, $uibModal, Modal) {


  	$scope.openSignUpModal = function(data) {
      Modal.openSignUpModal(data);
    }

  	$scope.openTagsModal = function(data) {
        Modal.openTagsModal(data);
    };

	$scope.openWelcomeModal = function(data) {
        Modal.openWelcomeModal(data);
    };

  });


