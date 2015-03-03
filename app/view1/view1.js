'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    

    $http.get('http://localhost:8080/recent_posts').success(function(data) {
	$scope.posts = data;
	for (var i = 0; i < data.length; i++) {
	    data[i].num_comments = data[i].comments.length;
	    data[i].body = $sce.trustAsHtml(data[i].body);
	}

    }).
    error(function(data) {
	$scope.posts = [{'title':'Error loading posts'}]
    })


}]);
