// app.js
var app = angular.module('app', []);

app.controller("HoverController", function($scope) {
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

// index.html
<div id="hover-interaction" ng-controller="HoverController">
  <div class="alert-box" ng-bind="message"></div>

  <ul class="small-block-grid-2">
    <li>
      <img class="th" src="../../app/img/demo1.jpg" shows-message-when-hovered message="Im the first house">
    </li>
    <li>
      <img class="th" src="../../app/img/demo2.jpg" shows-message-when-hovered message="Im the second house">
    </li>
  </ul>
</div>
