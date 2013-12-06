'use strict';


// Define our app bdayApp module
// along with its dependencies.
// 
// We'll need to include routes, cookies
// our Facebook interface, the bindonce
// library
angular.module('bdayApp', [
  'ngCookies',
  'ngRoute',
  'alFacebook',
  'alGroupon',
  'pasvaz.bindonce'
])
  .config(function ($routeProvider) {
    // Setting up our routes
    // ---------------------
    $routeProvider
      // We define a main route that serves as our
      // homepage
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      // We also define a share page
      .when('/share/:idx', {
        templateUrl: 'views/share.html',
        controller: 'ShareCtrl'
      })
      // Otherwise we'll set our homepage
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function(FBServiceProvider) {
    // Using our Facebook key, we're 
    FBServiceProvider.init({
      appId: '1378810232369883',
      status: true,
      cookie: true,
      xfbml: false
    });
  })
  .config(function(GrouponProvider) {
    GrouponProvider.setApiKey('01989e50ac648b3056ccc30231300f14c5da8c90');
  })
