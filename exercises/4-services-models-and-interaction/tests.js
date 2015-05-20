setTimeout(function() {

  var module = angular.module('app');
  var usernameInput = document.querySelector('input[name=username]');
  var passwordInput = document.querySelector('input[name=password]');
  var form = document.querySelector('form#logged-out');

  assert(
    module._configBlocks &&
    module._configBlocks[0] &&
    module._configBlocks[0][2] &&
    !!module._configBlocks[0][2][0].toString().match(/\$routeProvider.when\(\'\/logged-out/), 'a route `/logged-out` is defined with `$routeProvider`');

  assert(
    module._configBlocks &&
    module._configBlocks[0] &&
    module._configBlocks[0][2] &&
    !!module._configBlocks[0][2][0].toString().match(/\$routeProvider.when\(\'\/logged-in/), 'a route `/logged-in` is defined with `$routeProvider`');

  assert(
    module._invokeQueue &&
    module._invokeQueue[0] &&
    module._invokeQueue[0][2] &&
    module._invokeQueue[0][2][0] === 'LoginController', 'a controller named `LoginController` exists on the `app` module');

  assert(
    module._invokeQueue &&
    module._invokeQueue[1] &&
    module._invokeQueue[1][2] &&
    module._invokeQueue[1][2][0] === 'LogoutController', 'a controller named `LogoutController` exists on the `app` module');

  assert(
    form &&
    form.attributes['ng-submit'] &&
    form.attributes['ng-submit'].value === 'login()', 'logged-out.html form#logged-out is bound using `ng-submit` to `logout()`');

  assert(
    usernameInput &&
    usernameInput.attributes['ng-model'] &&
    usernameInput.attributes['ng-model'].value === 'credentials.username', 'logged-out.html input[name=username] is bound to `credentials.username` using ng-model');

  assert(
    passwordInput &&
    passwordInput.attributes['ng-model'] &&
    passwordInput.attributes['ng-model'].value === 'credentials.password', 'logged-out.html input[name=password] is bound to `credentials.password` using ng-model');


}, 1000);
