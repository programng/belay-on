angular.module('list', [])
.controller('ListController', function($scope, listFactory){
  $scope.id = 3;
  $scope.tempList = {
    id: 0,
    name: '',
    items: []
  };
  $scope.addNameToNewList = function(name) {
    $scope.tempList.name = name;
  };
  $scope.removeItemFromTemp = function(index){
    $scope.tempList.items.splice(index, 1);
  };
  $scope.addItemToTemp = function(newItem) {
    $scope.tempList.items.push(newItem);
    console.log($scope.tempList)
  };
  $scope.addToLists = function() {
    if (!$scope.lists) {
      $scope.lists = [];
    }
    $scope.tempList.id = $scope.id;
    $scope.lists.push($scope.tempList);
    $scope.id++;
    console.log($scope.lists)
  };

  $scope.newList = '';
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
  $scope.alreadyInUsersLists = function(listToCheckId, usersLists){
    var result = false;
    for (var i = 0; i < usersLists.length; i++) {
      if (listToCheckId === usersLists[i]){
        result = true;
      }
    }
    return result;
  };
  $scope.addToUsersLists = function(userId, listId) {
    if ($scope.alreadyInUsersLists(listId, $scope.users[userId].listIds)) {
      void 0;
    } else {
      console.log('hi');
      $scope.users[userId].listIds.push(listId);
      console.log($scope.users[userId].listIds)
    }
  };

  $scope.lists = listFactory.lists;
  $scope.users = listFactory.users;
  // $scope.lists = [
  //   {
  //     id: 0,
  //     name: 'Climbing',
  //     items: ['harness', 'climbing shoes']
  //   },
  //   {
  //     id: 1,
  //     name: "Camping",
  //     items: ['sleeping bag', 'tarp']
  //   },
  //   {
  //     id: 2,
  //     name: "Ice Climbing",
  //     items: ['crampons', 'helmet']
  //   }
  // ];
  // $scope.users = [
  // {
  //   id: 0,
  //   name: 'Jonathan Ng',
  //   listIds: [0, 1],
  //   personalizedLists: [],
  //   friends: [1]
  // },
  // {
  //   id: 1,
  //   name: 'John Doe',
  //   listIds: [0, 1],
  //   personalizedLists: [],
  //   friends: [0, 2]
  // },
  // {
  //   id: 2,
  //   name: 'Jane Doe',
  //   listIds: [2],
  //   personalizedLists: [],
  //   friends: [1]
  // }
  // ];
});