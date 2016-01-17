(function () {
    'use strict';

    angular
    .module('mainServiceModule')
    .service('subMainService', subMainService);

    subMainService.$inject = [];

    function subMainService() {
        var vm = this;

        vm.getValue = function (beginDate, endDate) {
            return 'Im the dude man too';
        };
    };
})();