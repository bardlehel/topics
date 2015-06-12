'use strict';

var app = angular.module('topics');

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/boc/add_model', {
        templateUrl: 'bestofcams/add_model/add_model.html',
        controller: 'bocAddModelController'
    });
}])
    .run(function($rootScope, Categories) {
        //initialize necessary variables in $rootScope
        Categories.query({name: 'Bestofcams Model'}, function(categories){
            $rootScope.modelCategoryId = categories[0];
        });
    })

    .controller('bocAddModelController', function($scope, $rootScope, Topics) {

        $scope.model = {};


        $scope.submitModel = function() {

            //create the topic object for the api
            var newModel = {};

            newModel.name = $scope.modelName;
            newModel.category_id = $rootScope.modelCategoryId;
            newModel.properties = [
                {name: 'Cam Feed URL', type: 'Url', value: $scope.camFeedUrl},
                {name: 'Model Page URL', type: 'Url', value: $scope.modelPageUrl}
            ];

            Topics.save(newModel, function(savedModel){
                $location.path('/boc/model/' + savedModel._id);
            });

        };



    });