'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('topics', [
    'ngRoute',
    'restangular',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/add_category', {
          templateUrl: 'add_category/add_category.html',
          controller: 'addCategoryController'
      })
      .when("/home", {
          templateUrl: "home/home.html",
          controller: "homeController"
      })
      .otherwise({redirectTo: '/home'});
}]);

app.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('/api');
});
