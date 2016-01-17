(function () {
	'use strict';

	angular
    .module('quizUI')
    .config(['$routeProvider',
      function ($routeProvider) {

      	var routes = [
			{
				url: '/home',
				template: 'templates/quiz.html',
				controller: 'mainController'
			}
      	];

      	routes.forEach(function (r, index) {
      		$routeProvider.when(r.url, { templateUrl: r.template, controller: r.controller });
      	});

      	$routeProvider.otherwise({ redirectTo: '/home' });
      }]);
})();