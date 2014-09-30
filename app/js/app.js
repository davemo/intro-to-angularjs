var app = angular.module("app", ['ngRoute'])

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

app.factory("ImageService", function() {
  var images = [
    {filename: "demo1.jpg", message: "I'm the first house."},
    {filename: "demo2.jpg", message: "I'm the second house."}
  ];
  return {images:images};
});

app.factory("AuthenticationService", function($location) {
  return {
    login: function(credentials) {
      if (credentials.username !== "ralph" || credentials.password !== "wiggum") {
        alert("Username must be 'ralph', password must be 'wiggum'");
      } else {
        $location.path('/home');
      }
    },
    logout: function() {
      $location.path('/login');
    }
  };
});

app.controller("LoginController", function($scope, $location, AuthenticationService) {
  $scope.credentials = { username: "", password: "" };

  $scope.login = function() {
    AuthenticationService.login($scope.credentials);
  }
});

app.controller("HomeController", function($scope, AuthenticationService, ImageService) {
  $scope.title = "Awesome Home";
  $scope.message = "Mouse Over these images to see a directive at work!";
  $scope.images = ImageService.images;

  $scope.$on("showsMessageWhenHovered:setMessage", function(event, message) {
    $scope.$apply(function() {
      $scope.message = message;
    });
    event.stopPropagation();
  });

  $scope.logout = function() {
    AuthenticationService.logout();
  };
});

app.directive("imageGrid", function() {
  return {
    restrict: "E",
    templateUrl: "image-grid.html"
  }
});

app.directive("showsMessageWhenHovered", function() {
  return {
    restrict: "A",
    link: function(scope, element, attributes) {
      var originalMessage = scope.message;
      element.bind("mouseenter", function() {
        scope.$emit("showsMessageWhenHovered:setMessage", attributes.message);
      });
      element.bind("mouseleave", function() {
        scope.$emit("showsMessageWhenHovered:setMessage", originalMessage);
      });
    }
  };
});
