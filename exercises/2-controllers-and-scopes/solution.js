// app.js
var app = angular.module('app', []);

app.controller('FirstController', function($scope) {
  $scope.dynamic = 'yes';
});

// index.html
<div id="put-a-controller-on-me" ng-controller="FirstController">
  I should be a controller with a value on the $scope: <em id="dynamic">{{dynamic}}</em>
</div>
