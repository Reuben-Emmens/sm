'use strict';

angular.module('sharemateWebappApp')
  .controller('RegistrationCtrl', function ($scope, Authentication) {
    
    $scope.list = [];
    $scope.text = '';
    $scope.submit = function() {
	    if ($scope.text) {
	        $scope.list.push($scope.text);
	        $scope.text = '';
	    } 
    };

  	$scope.getFacebookInfo = function() {
  		Authentication.getFacebookInfo();
  	}

  });
