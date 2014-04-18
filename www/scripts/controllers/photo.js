/* global steroids, alert */
/*jshint unused: false */

'use strict';

angular.module('rootSnapApp')
//.controller('PhotoCtrl', function ($scope, familysearch, $location) {
.controller('PhotoCtrl', function ($scope, $rootScope, $window) {
  $scope.openPhoto = function(url) {
    if ($rootScope.isMobile && typeof steroids !== 'undefined') {
      steroids.openURL(url);
    } else {
      $window.open(url);
    }
    return false;
  };


  $scope.uploadPhoto = function() {
    alert('Upload from computer Function');
  };
  $scope.takeMobilePhoto = function() {
    alert('here');
    return;
    navigator.notification.alert(
      'You are the winner!',  // message
      'Game Over',            // title
      'Done'                  // buttonName
    );  
    //alert('Take a new photo on mobile');
  };
  $scope.selectMobilePhoto = function() {
    alert('there');
/*
    checkForLocalhost();
    navigator.camera.getPicture(imageURIReceived, cameraError, { quality: 100,
      destinationType: navigator.camera.DestinationType.IMAGE_URI,
      sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true, // Let Cordova correct the picture orientation (WebViews don't read EXIF data properly)
      targetWidth: 1000,
      popoverOptions: { // iPad camera roll popover position
        width : 768,
        height : 190,
        arrowDir : Camera.PopoverArrowDirection.ARROW_UP
      }
    });
*/
  };
});