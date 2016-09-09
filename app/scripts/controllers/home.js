'use strict';

/**
 * @ngdoc function
 * @name shareMateWebappApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the shareMateWebappApp
 */
angular.module('sharemateWebappApp')
  .controller('HomeCtrl', function ($scope, $uibModal) {


  	$scope.openSignUpModal = function() {
  		var signUpModalInstance = $uibModal.open({
  			templateUrl: "views/modals/sign-up.modal.html",
  			controller: "SignUpModalCtrl" 
  		})
  		$scope.signUpModalInstance = signUpModalInstance;
  		console.log($scope.signUpModalInstance)
  	}



  	$scope.openTagsModal = function(data) {
      var modalInstance = $uibModal.open({
        templateUrl: 'views/modals/wizardModal.html',
        controller: 'TagsModalCtrl',
        size: '', // Sizes: 'sm', 'lg'
        resolve: {
          data: function() {
            return data === null ? {} : data;
          }
        }
      });

      modalInstance.result.then(function(result) {
        // Actions based on modal controller result
        if (result) {
          // ...do something on modal close result
        }
      }, function() {
        //$log.info('Modal dismissed at: ' + new Date());
      });
    };

  });


