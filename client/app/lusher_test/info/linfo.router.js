'use strict';

angular.module('nonverbalTestsApp.lusherTest')
  .config(function($stateProvider) {
    $stateProvider.state('lusher', {
      url: '/lusher',
      templateUrl: 'app/lusher_test/info/linfo.html'
    });
  });