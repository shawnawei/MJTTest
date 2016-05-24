var myApp = angular.module('myApp');

myApp.controller('projectsController', [ '$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams){
	console.log('projectController loaded');

	$scope.getProjects = function(){
		$http.get('/projects').success(function(response){
			$scope.projects = response;
		});
	}

	$scope.getProject = function(){
		var id = $routeParams.ProjectID;
		$http.get('/projects/'+id).success(function(response){
			$scope.project = response;
		});
	}

	$scope.getSubjectScans = function(){
		var id = $routeParams._id;
		$http.get('/projects/'+id).success(function(response){
			$scope.subject = response;
		});
	}

}]);