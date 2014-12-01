angular.module('app', [])
.controller('ListController', function($scope){
	$scope.tab = -1,
	$scope.changeTab = function(index) {
		$scope.tab = index;
	},
	$scope.lists = [
		{
			id: 1,
			name: 'Climbing',
			items: ['harness', 'climbing shoes']
		},
		{
			id: 2,
			name: "Camping",
			items: ['sleeping bag', 'tarp']
		},
		{
			id: 3,
			name: "Ice Climbing",
			items: ['crampons', 'helmet']
		}
	],
	$scope.users = [
	{
		id: 1,
		name: 'Jonathan Ng',
		listIds: [1, 2],
		personalizedLists: [],
		friends: ['John Doe']
	},
	{
		id: 2,
		name: 'John Doe',
		listIds: [2, 3],
		personalizedLists: [],
		friends: ['Jonathan Ng', 'Jane Doe']
	},
	{
		id: 3,
		name: 'Jane Doe',
		listIds: [3],
		personalizedLists: [],
		friends: ['John Doe']
	}
	]
});


