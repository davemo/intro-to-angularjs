setTimeout(function() {

  var module = angular.module('app');
  assert(
    module._invokeQueue &&
    module._invokeQueue[0] &&
    module._invokeQueue[0][2] &&
    module._invokeQueue[0][2][0] === 'HoverController', 'a controller named `HoverController` exists on the `app` module');

  var controllerDirective = document.querySelector('#hover-interaction').attributes['ng-controller'];
  assert(controllerDirective !== undefined, 'an `ng-controller` directive exists on div#hover-interaction');
  assert(controllerDirective && controllerDirective.value === 'HoverController', 'the `ng-controller` directive value is `HoverController`');

  var images = document.querySelectorAll('img.th');
  var ordinalMap = {
    0: 'first',
    1: 'second'
  };
  _.each(images, function(image, i) {
    var imageDirective   = image.attributes['shows-message-when-hovered'];
    var messageDirective = image.attributes['message'];
    var expectedValue    = "Im the " + ordinalMap[i] + " house";
    assert(imageDirective && imageDirective.name === 'shows-message-when-hovered', 'image ' + (i+1) + ' has a `shows-message-when-hovered` attribute');
    assert(messageDirective && messageDirective.value === expectedValue, 'image ' + (i+1) + ' has a `message` attribute with the value `' + expectedValue + '`');
  });

  var binding = document.querySelector('.alert-box').attributes['ng-bind'];
  assert(binding !== undefined, 'an `ng-bind` directive exists on div.alert-box');
  assert(binding && binding.value === 'message', 'the `ng-bind` directive value is `message`');

  assert(
    module._invokeQueue &&
    module._invokeQueue[1] &&
    module._invokeQueue[1][2] &&
    module._invokeQueue[1][2][0] === 'showsMessageWhenHovered', 'a directive named `showsMessageWhenHovered` exists on the `app` module');

}, 1000);
