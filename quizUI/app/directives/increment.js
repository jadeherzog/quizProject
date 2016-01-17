'use strict';

angular.module('quizUI').directive('incrementDirective', function () {
    return {
        scope: {
            data:'='
        },
        restrict: 'A',
        templateUrl: 'app/directives/increment.html',
        controller: function ($scope) {
            $scope.increment = function (value) {
                console.log($scope);

                $scope.data.total = $scope.data.total + value;
                  
                console.log($scope.data.total); 
            };
        }
    };
});