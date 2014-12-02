angular.module('app', [])
.controller('ListController', function($scope){
	$scope.newItem = '';
	$scope.addItem = function(newItem, listId) {
		$scope.lists[listId].items.push(newItem);
	};
	$scope.removeItem = function(index, listId){
		$scope.lists[listId].items.splice(index, 1);
	};
	$scope.listId = -1;
	$scope.friendId = -1;
	$scope.changeId = function(newId, id) {
		$scope[id] = newId;
	};
	$scope.lists = [
		{
			id: 0,
			name: 'Climbing',
			items: ['harness', 'climbing shoes']
		},
		{
			id: 1,
			name: "Camping",
			items: ['sleeping bag', 'tarp']
		},
		{
			id: 2,
			name: "Ice Climbing",
			items: ['crampons', 'helmet']
		}
	];
	$scope.users = [
	{
		id: 0,
		name: 'Jonathan Ng',
		listIds: [0, 1],
		personalizedLists: [],
		friends: [1]
	},
	{
		id: 1,
		name: 'John Doe',
		listIds: [0, 2],
		personalizedLists: [],
		friends: [0, 2]
	},
	{
		id: 2,
		name: 'Jane Doe',
		listIds: [2],
		personalizedLists: [],
		friends: [1]
	}
	];
});


