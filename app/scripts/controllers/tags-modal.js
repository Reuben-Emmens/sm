'use strict';

/**
 * @ngdoc function
 * @name shareMateWebappApp.controller:SignUpModalCtrl
 * @description
 * # SignUpModalCtrl
 * Controller of the shareMateWebappApp
 */
angular.module('sharemateWebappApp')
  .controller('TagsModalCtrl', function ($scope, $uibModalInstance, data) {
    $scope.data = data;
    $scope.myObject = {text: ''}; // Object initiated to link to child scopes of modal partials.
    
    $scope.steps = [
      { number: 1, name: 'First Step' },
      { number: 2, name: 'Second Step' },
      { number: 3, name: 'Third Step' }
      ];
    
    $scope.currentStep = angular.copy($scope.steps[0]);
    
    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
    
    $scope.nextStep = function() {
      // Perform current step actions and show next step:
      // E.g. save form data
      
      var nextNumber = $scope.currentStep.number;
      if ($scope.steps.length == nextNumber){
        $uibModalInstance.dismiss('cancel');
      }
      $scope.currentStep = angular.copy($scope.steps[nextNumber]);
    };


    $scope.list = [];
    $scope.submit = function() {
      console.log($scope.myObject.text )
      if ($scope.myObject.text ) {
          $scope.list.push($scope.myObject.text);
          $scope.myObject.text = '';
      }
      console.log("Done.") 
    };


    
  });
