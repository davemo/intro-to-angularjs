var app = angular.module("app", [])

app.config(function($routeProvider) {

  $routeProvider.when('/login', {
    templateUrl: 'login.html',
    controller: 'LoginController'
  });

  $routeProvider.when('/home', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  });

  $routeProvider.otherwise({ redirectTo: '/login' });

});

app.controller("LoginController", function($scope, $location) {
  $scope.credentials = { username: "", password: "" };

  $scope.login = function() {
    if ($scope.credentials.username !== "ralph" || $scope.credentials.password !== "wiggum") {
      alert("Username must be 'ralph', password must be 'wiggum'");
    } else {
      $location.path('/home');
    }
  }
});

app.controller("HomeController", function($scope) {
  $scope.title = "Awesome Home";
  $scope.message = "Mouse Over these images to see a directive at work!";
});

app.directive("showsMessageWhenHovered", function() {
  return {
    restrict: "A", // A = Attribute, C = CSS Class, E = HTML Element, M = HTML Comment
    link: function(scope, element, attributes) {
      var originalMessage = scope.message;
      element.bind("mouseenter", function() {
        scope.message = attributes.message;
        scope.$apply();
      });
      element.bind("mouseleave", function() {
        scope.message = originalMessage;
        scope.$apply();
      });
    }
  };
});
