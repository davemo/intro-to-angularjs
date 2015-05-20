var module = angular.module('app');
var controllerDirective = document.querySelector('#put-a-controller-on-me').attributes['ng-controller'];

assert(
  module._invokeQueue &&
  module._invokeQueue[0] &&
  module._invokeQueue[0][2] &&
  module._invokeQueue[0][2][0] === 'FirstController', 'a controller named `FirstController` exists on the `app` module');
assert(controllerDirective !== undefined, 'an `ng-controller` directive exists on div#put-a-controller-on-me');
assert(controllerDirective && controllerDirective.value === 'FirstController', 'the `ng-controller` directive value is `FirstController`');
assert(document.querySelector('#dynamic').innerText === '{{dynamic}}', 'the text value of em#dynamic is `{{dynamic}}`');
