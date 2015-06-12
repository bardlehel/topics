'use strict';

var app = angular.module('topics');

app.
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/category/:id', {
            templateUrl: 'category/category.html',
            controller: 'categoryController'
        });
    }])
    .controller('categoryController', function($scope, $location, $routeParams, Categories, typeaheadDataFactory) {

        $scope.category = [];
        $scope.parent_name = '';

        $scope.loadCategoryData = function() {
            Categories.get({id:$routeParams.id}, function(category) {
                $scope.category = category;

                $scope.loadParentProperties(category.parent_id);

                //get parent name for input
                Categories.get({id:$scope.category.parent_id}, function(parent) {
                    $scope.parent_name = parent.name;
                });
            });
        }

        $scope.saveCategory = function() {
            $scope.category.$update(function() {

            });
        }

        $scope.loadParentProperties = function (categoryId) {
            Categories.get({id:categoryId}, function(category) {
                $scope.category.inheritedProperties = category.properties;
            });
        }

        $scope.onItemSelected=function(){
            //get parent's properties
            $scope.loadParentProperties($scope.category.parent_id);
        }

        $scope.onKeyUp = function() {
            $scope.selected = false;
            $scope.items = [];
            typeaheadDataFactory.get('/api/categories/search?q=' + $scope.parent_name).then(function (data) {
                $scope.items = data;
            });
        };

        //internal functions
        function init() {
            $scope.loadCategoryData();
        }

        init();
    });
