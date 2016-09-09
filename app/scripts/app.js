'use strict';

/**
 * Main module of the application.
 */

var sharemateApp = angular
  .module('sharemateWebappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'firebase'
  ])
  
sharemateApp.run(['$rootScope', '$location', '$window', 'Authentication', function($rootScope, $location, $window, Authentication) {
  
  $rootScope.user = {};

  $rootScope.$on ('$routeChangeError', function(event, next, previous, error){
    if (error=='AUTH_REQUIRED') {
      $rootScope.message = 'Sorry, you must log in to access that page';
      $location.path('/login');
    }
  })

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '914569111977379',
      channelUrl : 'app/channel.html',
      status     : true,
      xfbml      : true,
      version    : 'v2.7'
    });

    FB.getLoginStatus(function(response) {
      Authentication.statusChangeCallback(response);
    });

    FB.Event.subscribe('auth.authResponseChange', Authentication.checkLoginState);
  };

   // Load the Facebook SDK asynchronously
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

}]);


sharemateApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      }) 
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegistrationCtrl',
        controllerAs: 'register'})
      .otherwise({
        redirectTo: '/'})
  });