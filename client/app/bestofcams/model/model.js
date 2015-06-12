'use strict';

var app = angular.module('topics');

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/boc/model/:id', {
        templateUrl: 'bestofcams/model/model.html',
        controller: 'bocModelController'
    });
}])


    .controller('bocModelController', function($scope, $http, $location, Topics, Scraper, tagInputDataFactory) {
        $scope.model = {}

        $scope.loadModel = function() {
            Categories.get({id:$routeParams.id}, function(model) {
                $scope.model = model;


            });
        }

        $scope.scrapeModelInfo = function(modelPageUrl) {

        }

        $scope.saveModel = function() {
            Topics.$update($scope.model, function(data) {

            });
        }

        //internal functions
        function init() {
            $scope.loadModel();
        }

        init();
    });