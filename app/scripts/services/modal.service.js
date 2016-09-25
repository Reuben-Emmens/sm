'use strict';

/**
 * @ngdoc service
 * @name sharemateWebappApp.modalConnection
 * @description
 * # modalConnection
 * Service in the sharemateWebappApp.
 */
angular.module('sharemateWebappApp')
  .factory("Modal", [ "$uibModal", 
  	function ($uibModal) {

var myObject = {

	openSignUpModal:  function(data) {
		var signUpModalInstance = $uibModal.open({
			templateUrl: "views/modals/sign-up.modal.html",
			controller: "SignUpModalCtrl", 
      animation: false,
      keyboard: false, 		  			
			resolve: {
          data: function() {
            return data === null ? {} : data;
          }
        }
		})
	},

	openTagsModal: function(data) {
		var modalInstance = $uibModal.open({
      templateUrl: 'views/modals/wizardModal.html',
      controller: 'TagsModalCtrl',
      backdrop: 'static',
      animation: false,
      keyboard: false,  
      resolve: {
        data: function() {
          return data === null ? {} : data;
        }
      }
		});
	}


}

return myObject;

}]);
