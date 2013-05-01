angular.module("app", []).config(function($routeProvider) {

  $routeProvider.when('/login', {
    templateUrl: 'login.html',
    controller: 'LoginController'
  });

  $routeProvider.otherwise({ redirectTo: '/login' });

});

angular.module("app").controller("LoginController", function($scope) {

});
