'use strict';

var app = angular.module('topics');

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/boc/main', {
        templateUrl: 'bestofcams/main/main.html',
        controller: 'bocMainController'
    });
}])


    .controller('bocMainController', function($scope, $location, Categories, typeaheadDataFactory) {

    });