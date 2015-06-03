'use strict';

var app = angular.module('topics');

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/add_category', {
            templateUrl: 'add_category/add_category.html',
            controller: 'addCategoryController'
        });
    }])

    .controller('addCategoryController', function($scope, $location, Restangular, typeaheadDataFactory) {
            $scope.newCategory = {};
            $scope.newCategory.properties = [];
            $scope.parents = [];
            $scope.parent = '';
            $scope.submitted = false;

            $scope.deleteProperty= function (index) {
                $scope.newCategory.properties.splice(index, 1);
            }

            $scope.addProperty = function (index) {
                $scope.newCategory.properties.push({
                    id: $scope.newCategory.properties.length + 1,
                });
            }

            $scope.onParentSelected = function() {
                $scope.newCategory.parentId = $scope.itemId;
            }

            $scope.onKeyDown = function() {
                $scope.selected=false;

                typeaheadDataFactory.get('/api/categories/search?q='+$scope.parent).then(function(data){
                    $scope.parents=data;
                });
            }

           $scope.submitCategory = function() {
                var categories = Restangular.all('categories');
                categories.post($scope.newCategory);
                $scope.submitted = true;

                $location.path('/home');
            };
    });
