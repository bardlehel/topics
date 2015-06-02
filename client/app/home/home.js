'use strict';

angular.module('topics.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'homeController'
        });
    }])

    .controller('homeController', [function($scope, $location, Restangular) {

        $scope.selectedTags = [];



        //internal functions

        function init() {
            //get topics
            var baseTopics = Restangular.all('topics');
            baseTopics.getList().then(function(topics) {
                $scope.topics = topics;
            });

            //get rated tags
            var baseTags = Restangular.all('rated_tags');
            baseTags.getList().then(function(tags){
                $scope.tags = tags;
            });
        };


        init();
    }]);
