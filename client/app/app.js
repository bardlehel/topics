'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('topics', [
    'ngRoute',
    'restangular',
    'topics.add_category',
    'topics.view2',
    'topics.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);

app.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('/api');
});
