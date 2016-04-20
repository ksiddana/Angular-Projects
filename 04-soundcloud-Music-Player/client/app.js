var soundcloud = angular.module('soundcloud', ['ngRoute',
  'soundcloud.main'
]);

soundcloud.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'homepage/landingPage.html',
        controller: 'soundcloudController'
    })

    .when('/login', {
      templateUrl: 'homepage/login.html'
    })
    
});

angular.module('calculatorApp', [])

.controller('CalculatorController', function CalculatorController($scope) {
  
  $scope.z = 0;
  $scope.sum = function() {
    $scope.z = $scope.x + $scope.y;
  };
});