'use strict';

var app = angular.module('topics');

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/add_category', {
            templateUrl: 'add_category/add_category.html',
            controller: 'addCategoryController'
        });
    }])


    .controller('addCategoryController', function($scope, $location, Categories, typeaheadDataFactory) {
            $scope.newCategory = {};
            $scope.newCategory.properties = [];
            $scope.newCategory.inheritedProperties = [];
            $scope.parents = [];
            $scope.parent_id = '';
            $scope.items = [];
            $scope.parent_name="";

            $scope.deleteProperty= function (index) {
                $scope.newCategory.properties.splice(index, 1);
            }

            $scope.addProperty = function (index) {
                $scope.newCategory.properties.push({
                    //id: $scope.newCategory.properties.length + 1
                });
            }

           $scope.submitCategory = function() {
               console.log(JSON.stringify($scope.newCategory));
                //package new category properly to submit
                var category = $scope.newCategory;
                Categories.save(category, function(savedCategory){
                    $location.path('/category/' + savedCategory._id);
                });

            };

            $scope.loadParentProperties = function (categoryId) {
                Categories.get({id:categoryId}, function(category) {
                    $scope.newCategory.inheritedProperties = category.properties;
                });
            }

            $scope.onItemSelected=function(){
                //get parent's properties
                $scope.loadParentProperties($scope.newCategory.parent_id);
            }

            $scope.onKeyUp = function() {
                $scope.selected = false;
                $scope.items = [];
                typeaheadDataFactory.get('/api/categories/search?q=' + $scope.parent_name).then(function (data) {
                    $scope.items = data;
                });
            };
    });



