'use strict';

angular.module('nonverbalTestsApp.sbcTest')
  .config(function($stateProvider) {
    $stateProvider.state('sbcInfo', {
      url: '/social_intelegence',
      templateUrl: 'app/sbc_test/info/sbcinfo.html'
    });
  });