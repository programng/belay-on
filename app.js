angular.module('app', [])
.controller('ListController', function($scope){
	$scope.tab = -1,
	$scope.changeTab = function(index) {
		$scope.tab = index;
	},
	$scope.lists = [
		{
			name: 'Climbing',
			items: ['harness', 'climbing shoes']
		},
		{
			name: "Camping",
			items: ['sleeping bag', 'tarp']
		}
	]
});


