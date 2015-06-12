'use strict';

var app = angular.module('topics');

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'homeController'
        });
    }])

    .controller('homeController', function($scope, $location, Topics) {

        $scope.selectedTags = [];


        //internal functions
        function init() {
            //get topics
            Topics.query.then(function(topics) {
                $scope.topics = topics;
            });

            //get rated tags
/*
            baseTags.getList().then(function(tags){
                $scope.tags = tags;
            });
            */
        };


        init();
    });
