// app.js

var app = angular.module('app', ['ngRoute']);

app.controller('FirstController', function($scope) {
  $scope.stooges = ['larry', 'curly', 'moe'];
});

app.config(function($routeProvider) {
  $routeProvider.when('/stooges', {
    templateUrl: 'stooges.html',
    controller: 'FirstController'
  });

  $routeProvider.otherwise({ redirectTo: '/stooges' });
});

// index.html
<div id="view" ng-view></div>

// stooges.html
<table id="stooges">
  <tbody>
    <tr ng-repeat="stooge in stooges"><td>{{stooge}}</td></tr>
  </tbody>
</table>


