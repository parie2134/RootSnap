'use strict';

angular.module('rootSnapApp')
  .factory('familysearch', function ($window, $http, $q, $timeout) {
    $window.FamilySearch.init({
      /* jshint camelcase:false */
      //app_key: 'WCQY-7J1Q-GKVV-7DNM-SQ5M-9Q5H-JX3H-CMJK',
      app_key: 'KB2L-BVD1-3Q6S-J7X4-GKFZ-4168-QPZ6-NJRK',
      environment: 'production',
      auth_callback: 'http://localhost:9000/#!/auth',
      http_function: $http,
      deferred_function: $q.defer,
      timeout_function: $timeout,
      save_access_token: true,
      auto_expire: true,
      auto_signin: true
    });

    $window.FamilySearch.Person.prototype.isMale = function() {
      return this.display.gender === 'Male';
    };

    // Public API here
    return $window.FamilySearch;
  });
