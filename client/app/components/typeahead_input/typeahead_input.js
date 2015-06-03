var app = angular.module('topics');

app.directive('typeahead', function($timeout) {
    return {
        restrict: 'AEC',
        scope: {
            items: '=',
            prompt:'@',
            title: '@',
            subtitle:'@',
            model: '=',
            onSelect:'&'
        },
        link:function(scope,elem,attrs){
            scope.handleSelection=function(selectedItem){
                scope.model=selectedItem.name;
                scope.itemId = selectedItem._id;
                scope.current=0;
                scope.selected=true;
                $timeout(function(){
                    scope.onSelect();
                },200);
            };
            scope.current=0;
            scope.selected=true;
            scope.isCurrent=function(index){
                return scope.current==index;
            };
            scope.setCurrent=function(index){
                scope.current=index;
            };
        },
        templateUrl: 'typeahead_input.html'
    }
});

app.factory('typeaheadDataFactory', function($http) {
    return {
        get: function(url) {
            return $http.get(url).then(function(resp) {
                return resp.data;
            });
        }
    };
});
