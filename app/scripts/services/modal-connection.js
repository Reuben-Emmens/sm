'use strict';

/**
 * @ngdoc service
 * @name sharemateWebappApp.modalConnection
 * @description
 * # modalConnection
 * Service in the sharemateWebappApp.
 */
angular.module('sharemateWebappApp')
  .factory("modalConnection", [
  	function () {

  		var modalConnectionObject = {
  			
  			openTagsModal: function(data) {
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


  		}

  		return modalConnectionObject;

  }]);
