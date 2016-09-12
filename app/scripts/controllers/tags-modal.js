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
    $scope.boolean = true;

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
      if ($scope.myObject.text && $scope.list.indexOf($scope.myObject.text) == -1) {
          $scope.list.push($scope.myObject.text);
          $scope.myObject.text = '';
      } else {
        $scope.message = "You already have that tag."
      }
      console.log("Done.") 
    };


    $scope.undoIngredient = function(entry) {''
        var index = $scope.list.indexOf(entry);
        if (index > -1) {
            $scope.list.splice(index, 1);
        }
    }

    $scope.addTags = function() {
      // Add method.
    }

    $scope.sendConfirmationEmail = function() {
      // Add method.
    }

      
  });
