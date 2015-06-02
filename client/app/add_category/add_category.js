'use strict';

angular.module('topics.add_category', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
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
    }]);
