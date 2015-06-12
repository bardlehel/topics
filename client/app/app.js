'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('topics', [
    'ngRoute',
    'ngResource',
]).
config(['$routeProvider', function($routeProvider) {

  $routeProvider
      /*.when('/add_category', {
          templateUrl: 'add_category/add_category.html',
          controller: 'addCategoryController'
      })
      .when("/home", {
          templateUrl: "home/home.html",
          controller: "homeController"
      })*/
      .otherwise({redirectTo: '/home'});
}]);

//consume RESTful API from server

app.factory("Categories", function($resource) {
    return $resource('/api/categories/:id', { id: '@id' }, {
        update: {
            method: 'PUT' // this method issues a PUT request
        },
        query: {method: 'GET', isArray: true },
        get: {method: 'GET', isArray: false }
    });
});

app.factory("Topics", function($resource) {
    return $resource('/api/topics/:id', { id: '@id' }, {
        update: {
            method: 'PUT' // this method issues a PUT request
        },
        query: {method: 'GET', isArray: false },
        get: {method: 'GET', isArray: false }
    });
});

app.service("Scraper", function($http){

    this.getTextFromXPath = function(xpath) {
        var text = '';

        var parse = new DOMParser();

        return text;
    }

})

