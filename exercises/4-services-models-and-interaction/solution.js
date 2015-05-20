// app.js

var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/logged-out', {
    templateUrl: 'logged-out.html',
    controller: 'LoginController'
  });

  $routeProvider.when('/logged-in', {
    templateUrl: 'logged-in.html',
    controller: 'LogoutController'
  });

  $routeProvider.otherwise({ redirectTo: '/logged-out' });
});

app.controller('LoginController', function($scope, AuthenticationService) {
  $scope.credentials = {username: '', password: ''};
  $scope.login = function() {
    AuthenticationService.login($scope.credentials);
  };
});

app.controller('LogoutController', function($scope, AuthenticationService) {
  $scope.logout = AuthenticationService.logout;
});

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

// logged-out.html
<form ng-submit="login()">
  <fieldset class="radius">
    <div class="row">
      <div class="large-6 columns">
        <input type="text" name="username" placeholder="username" ng-model="credentials.username" required/>
      </div>
        <div class="large-6 columns">
        <input type="password" name="password" placeholder="password" ng-model="credentials.password" required/>
      </div>
    </div>

    <div class="row">
      <div class="large-12 columns">
        <button type="submit" class="button large expand radius">Log In</button>
      </div>
    </div>
  </fieldset>
</form>

// logged-in.html
<h1 style="color: red;">YOU ARE LOGGED IN!!!</h1>
<button type="submit" class="button large expand radius" ng-click="logout()">Log Out</button>
