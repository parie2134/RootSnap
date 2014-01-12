'use strict';

angular.module('rootSnapApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider, ListCtrlResolver, ProfileCtrlResolver) {
    $locationProvider.html5Mode(false).hashPrefix('!');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl',
        resolve: ListCtrlResolver
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        resolve: ProfileCtrlResolver
      })
      .when('/photo', {
        templateUrl: 'views/photo.html',
        controller: 'PhotoCtrl'
        //resolve: PhotoCtrlResolver
      })
      .when('/mocklist', {
        templateUrl: 'mocks/list.html',
        controller: 'ListCtrl',
        resolve: ListCtrlResolver
      })
      .when('/mockprofile', {
        templateUrl: 'mocks/profile.html',
        controller: 'ProfileCtrl',
        resolve: ProfileCtrlResolver
      })
      .when('/mockphoto', {
        templateUrl: 'mocks/photo.html',
        controller: 'PhotoCtrl'
        //resolve: PhotoCtrlResolver
      })
      .otherwise({
        redirectTo: '/'
      });
  });

if (steroids) {
  steroids.view.setAllowedRotations([0,180,-90,90]);  // Will rotate to every direction
}