'use strict';

angular.module('topics.add_category', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/add_topic', {
            templateUrl: 'add_topic/add_topic.html',
            controller: 'addTopicController'
        });
    }])

    .controller('addTopicController', [function($scope, $location, Restangular) {
        $scope.newTopic = {};
        $scope.submitted = false;

        $scope.submitCategory = function() {
            var topics = Restangular.all('topics');
            topics.post($scope.newTopic);
            $scope.submitted = true;

            $location.path('/home');
        };
    }]);
