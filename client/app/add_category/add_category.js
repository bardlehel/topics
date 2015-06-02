'use strict';

var app = angular.module('topics');

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/add_category', {
            templateUrl: 'add_category/add_category.html',
            controller: 'addCategoryController'
        });
    }])

    .controller('addCategoryController', [function($scope, $location, Restangular) {
        $scope.newCategory = {};
        $scope.submitted = false;

        $scope.submitCategory = function() {
            var categories = Restangular.all('categories');
            categories.post($scope.newCategory);
            $scope.submitted = true;

            $location.path('/home');
        };
    }])

    .controller('ItemsController', [function($scope, $location, Restangular) {
        $scope.items = [];

        $scope.deleteItem = function (index) {
            items.splice(index, 1);
        }
        $scope.addItem = function (index) {
            items.push({
                id: $scope.items.data.length + 1,
                title: $scope.newItemName
            });
        }
    }])
