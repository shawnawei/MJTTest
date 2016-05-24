var myApp = angular.module('myApp');

myApp.controller('scanSessionsController', [ '$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams){
	console.log('scanSessionsController loaded');

	$scope.getScanSession = function(){
		var id = $routeParams.SubjectIDinProject;
		$http.get('/scanSession/'+id).success(function(response){
			$scope.scanSession = response;
		});
	}



	/*$scope.getScanSession = function(){
		var id = $routeParams.Projects.ProjectID;
		$http.get('/scanSession/'+id).success(function(response){
			$scope.subject = response;
		});
	}*/

}]);