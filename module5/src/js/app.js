(function() {
    'use strict';
  
    angular.module('restaurant', ['ngRoute'])
    .config(config);
  
    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
      $routeProvider
      .when('/signup', {
        templateUrl: 'src/signup/signup.template.html',
        controller: 'SignupController as signupCtrl'
      })
      .when('/myinfo', {
        templateUrl: 'src/myinfo/myinfo.template.html',
        controller: 'MyInfoController as myinfoCtrl'
      })
      .otherwise({
        redirectTo: '/signup'
      });
    }
  })();
  