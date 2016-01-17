'use strict';

angular.module('quizUI').directive('payrollDateDirective', function () {
    return {
        restrict: 'A',
        transclude: true,
        template: '<div>{{ datevalue }}</div>',
        controller: function ($scope) {
            $scope.datevalue = '1/1/2015';
            //console.log('tester');
        }
    };
});


angular.module('quizUI').directive('payrollDateDirectiveElement', function () {
    return {
        restrict: 'E',
        transclude: true,
        template: '{{ datevalue }}',
        controller: function ($scope) {
            $scope.datevalue = '1/1/2015';
            //console.log('tester');
        }
    };
});

angular.module('quizUI').directive('myClick', function ($parse) {
    return {
        link: function (scope, el, attrs) {
            
            var fn = $parse(attrs['myClick']);
            console.log(el);

            el.on('click', function () {
                scope.$apply(function () {
                    
                    fn(scope)
                });
            })
            //console.log(el);
        }
    };
});


angular.module('quizUI').directive('userTile', function () {
    return {
        restrict: 'E',
        scope: {
            user: '='
        },
        templateUrl: 'app/directives/usertile.html',
        controller: function ($scope) {
            $scope.selected = function () {
                $scope.user.selected = !$scope.user.selected;
            };
        }
    };
});

angular.module('quizUI').directive('myInput', function ($compile) {
    return {
        //restrict: 'E',

        link: function (scope, element, attr, conroller) {
            var markup = "<input type='text' ng-model='userA.name' /> {{userA.name}}";
            angular.element(element).append($compile(markup)(scope));
        }
    };
});


angular.module('quizUI').directive('myFunctionTest', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/myfunctiontest.html',
        scope: {
            upvote: '&',
            downvote: '&',
            votecount: '='
        }
    };
});
