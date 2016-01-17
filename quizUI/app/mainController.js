(function () {
    'use strict';

    var controllerid = 'mainController';
    angular
        .module('mainModule', ['mainServiceModule'])
        .controller(controllerid, mainController);

    mainController.$inject = ['$scope', 'mainService', 'subMainService'];

    function mainController($scope, mainService, subMainService) {

        var vm = this;

        $scope.title = 'Quiz Application';

        $scope.test = '123';

        console.log($scope);

        vm.mainService = mainService;
        vm.subMainService = subMainService;

        vm.value = mainService.getValue();
        vm.value2 = subMainService.getValue();

        console.log(vm.value);

        console.log(vm.value2);

        $scope.data = {
            total: 1
        };

        $scope.data2 = {
            message: 'nothing yet'
        };

        $scope.clickHandler = function (p) {
            $scope.data2.message = 'just clicked1';
            console.log('just clicked!!');
        };

        $scope.userA = {
            name: 'Megan Herzog',
            gender: 'female',
            address: {
                city: 'shakopee',
                state: 'mn'
            },
            selected: true,
        };

        $scope.upVoteHandler = function () {
            $scope.voteCount = $scope.voteCount + 1;
            console.log('up vote: ' + $scope.voteCount);
        };
        $scope.downVoteHandler = function () {
            $scope.voteCount = $scope.voteCount - 1;
            console.log('down vote: ' + $scope.voteCount);
        };
        $scope.voteCount = 0;
    };
})();


