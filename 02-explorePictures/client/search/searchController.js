angular.module('explorer.search', ['SearchServices'])

.controller('SearchController', ['$scope', function($scope) {
  console.log("entering here");
  $scope.location = {
    text : 'San Francisco'
  }
  console.log($scope.location.text);
}])