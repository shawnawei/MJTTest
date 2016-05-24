var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'subjectsController',
		templateUrl:'views/home.html'
	})

	.when('/subjects', {
		controller:'subjectsController',
		templateUrl:'views/subjects.html'
	})

	.when('/subjects/:ID', {
		controller:'subjectsController',
		templateUrl:'views/subject_details.html'
	})

	.when('/projects', {
		controller:'projectsController',
		templateUrl:'views/projects.html'
	})

	.when('/projects/:ProjectID', {
		controller:'projectsController',
		templateUrl:'views/project_details.html'
	})

	.when('/searchPage', {
		controller:'searchController',
		templateUrl:'views/searchPage.html'
	})

	.when('/:ProjectID/:SubjectIDinProject', {
		controller:'scanSessionsController',
		templateUrl:'views/scanSessionPage.html'
	})

	.otherwise({
		redirctTo: '/#/'
	});
});