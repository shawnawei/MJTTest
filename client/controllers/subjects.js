var myApp = angular.module('myApp');

myApp.controller('subjectsController', [ '$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams){
	console.log('SubjectsController loaded');

	$scope.getSubjects = function(){
		$http.get('/subjects').success(function(response){
			$scope.subjects = response;
		});
	}

	$scope.getSubject = function(){
		var id = $routeParams.ID;
		$http.get('/subjects/'+id).success(function(response){
			$scope.subject = response;
		});
	}


	/*$scope.getScanSession = function(){
		var id = $routeParams.Projects.ProjectID;
		$http.get('/scanSession/'+id).success(function(response){
			$scope.subject = response;
		});
	}*/

}]);