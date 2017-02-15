'use strict';

angular.module('nonverbalTestsApp.lusherTest')
  .config(function($stateProvider) {
    $stateProvider.state('lresult', {
      url: '/lusher/result',
      templateUrl: 'app/lusher_test/result/lresult.html',
      params: {
        result: [1, 2, 6, 5, 0, 4, 7, 3, 3, 2, 6, 5, 0, 4, 7, 1]
      },
      controller:'lResultController',
      controllerAs: 'vm'
    });
  });