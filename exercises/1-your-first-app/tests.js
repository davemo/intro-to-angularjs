assert(angular.module('app') !== undefined, 'an angular module named `app` exists');
var appDirective = document.querySelector('html').attributes['ng-app'];
assert(appDirective !== undefined, 'an `ng-app` directive exists in index.html');
assert(appDirective && appDirective.value === 'app', 'the `ng-app` directive value is `app`.');
