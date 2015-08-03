var githubSiteApp = angular.module('githubSiteApp', []);

githubSiteApp.controller('IndexCtrl', function($scope) {
	$scope.navPages = [
	{'title': 'Home',
	'href': 'index.html'},
	{'title': 'Test 1',
	'href': 'test1.html'},
	{'title': 'Test 2',
	'href': 'test2.html'}
	]
});