'use strict';

angular.module('nonverbalTestsApp.sbcTest')
  .config(function($stateProvider) {
    $stateProvider.state('sbcResult', {
      url: '/social_intelegence/result',
      templateUrl: 'app/sbc_test/result/sbcresult.html',
      params: {
        result: 0
      },
      controller:'sbcResuleController',
      controllerAs: 'vm'
    });
  });