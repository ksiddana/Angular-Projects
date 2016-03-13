var app = angular.module("computer", ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/main', {
      templateUrl: 'main/main.html',
      controller: 'MainController'
    }).
    when('/about', {
      templateUrl: 'about/about.html',
      controller: 'AboutController'
    }).
    when('/services', {
      templateUrl: 'services/services.html',
      controller: 'ServicesController'
    }).
    when('/contact', {
      templateUrl: 'contact/contact.html',
      controller: 'ContactController'
    }).
    otherwise({redirectTo:'main/main.html'})

}])


.controller('MainController', ['$scope', '$http', 
  function($scope, $http) {
  $http.get('services/services.json').then(function(response){
    $scope.services = response.data;
  });
}])

.controller('ServicesController', ['$scope', '$http', 
  function($scope, $http) {
  $http.get('services/services.json').then(function(response){
    $scope.services = response.data;
  });
}])

.controller('ContactController', ['$scope', '$http',
  function($scope, $http) {
    $http.get('contact/locations.json').then(function(response) {
      $scope.locations = response.data;
    })

  }])