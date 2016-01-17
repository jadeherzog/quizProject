(function () {
    'use strict';

    angular
    .module('mainServiceModule', [])
    .service('mainService', mainService);

    mainService.$inject = [];

    function mainService() {
        var vm = this;

        vm.getValue = function (beginDate, endDate) {
            return 'Im the dude man';
        };
    };
})();