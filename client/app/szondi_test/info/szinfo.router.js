'use strict';

angular.module('nonverbalTestsApp.szondiTest')
  .config(function($stateProvider) {
    $stateProvider.state('szinfo', {
      url: '/szondi',
      templateUrl: 'app/szondi_test/info/szinfo.html'
    });
  });