'use strict';

var app = angular.module('topics');

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/add_topic', {
            templateUrl: 'add_topic/add_topic.html',
            controller: 'addTopicController'
        });
    }])

    .controller('addTopicController', function($scope, $location, Topics) {
        $scope.newTopic = {};
        $scope.submitted = false;

        $scope.submitTopic = function() {
            Topics.save($scope.newTopic);
            $scope.submitted = true;

            //$location.path('/home');
        };
    });
