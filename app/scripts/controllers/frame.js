'use strict';

angular.module('bdayApp')
  .controller('FrameCtrl', function ($scope, $location, FB, TouchDevice) {
    $scope.touch = TouchDevice;

    $scope.login = function() {
      FB.login('user_birthday,user_about_me,friends_birthday')
      .then(function(resp) {
        $scope.userLoggedIn = true;
        $scope.$broadcast("user:login");
      })
    }
    FB.loggedIn().then(function() {
      $scope.userLoggedIn = true;
    }, function() {
      $scope.userLoggedIn = false;
    });

    $scope.logout = function() {
      FB.logout()
      .then(function() {
        $scope.userLoggedIn = false;
        $scope.profile = {}
      })
    }

    $scope.hasPrevPage = function() {
      if ($location.path() != "/") return true;
      return false;
    }

  });
