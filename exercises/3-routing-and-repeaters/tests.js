setTimeout(function() {
  var app = angular.module('app');
  var stoogesTable = document.querySelector('#stooges');
  var view = document.querySelector('#view');

  assert(app.requires[0] === 'ngRoute', 'the `ngRoute` dependency is included in the `app` module')
  assert(view && view.attributes['ng-view'] !== undefined, 'the `ng-view` attribute exists on div#view');

  assert(
    app._configBlocks &&
    app._configBlocks[0] &&
    app._configBlocks[0][2] &&
    !!app._configBlocks[0][2][0].toString().match(/\$routeProvider.when\(\'\/stooges/), 'a route `/stooges` is defined with `$routeProvider`');

  assert(stoogesTable !== null, 'there is a table#stooges element that was loaded via ngRoute');
  assert(stoogesTable && !!stoogesTable.innerHTML.match(/(?:.*larry)(?:.*curly)(?:.*moe)/), 'larry, curly, and moe exist in the table, rendered from the `FirstController.$scope`');
}, 1000);

