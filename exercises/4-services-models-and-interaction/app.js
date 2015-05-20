var app = angular.module('app', ['ngRoute']);

// routes here

// LoginController here

// LogoutController here

app.service("AuthenticationService", function($location) {
  return {
    login: function(credentials) {
      if (credentials.username !== "ralph" || credentials.password !== "wiggum") {
        alert("Username must be 'ralph', password must be 'wiggum'");
      } else {
        $location.path('/logged-in');
      }
    },
    logout: function() {
      $location.path('/logged-out');
    }
  };
});
