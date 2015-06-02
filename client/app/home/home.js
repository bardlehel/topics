'use strict';

angular.module('topics.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'homeController'
        });
    }])

    .controller('homeController', [function($scope, $location, Restangular) {

            //get topics
            var baseTopics = Restangular.all('topics');
            baseTopics.getList().then(function(topics) {
                $scope.topics = topics;
            });

            //get rated tags

    }]);
