var myApp = angular.module('myApp');

myApp.controller('searchController', [ '$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('searchController loaded');

	$scope.getSearchPage = function(){
		$http.get('/searchPage').success(function(response){
			$scope.search = response;
		});
	}
}]);