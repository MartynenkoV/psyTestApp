'use strict';

angular.module('nonverbalTestsApp.szondiTest')
  .config(function($stateProvider) {
    $stateProvider.state('szresult', {
      url: '/szondi/result',
      templateUrl: 'app/szondi_test/result/szresult.html',
      params: {
        result: {'s':[2,2],'h':[0,1],'e':[2,2],'hy':[0,2],'k':[1,1],'p':[3,1],'d':[2,0],'m':[3,2]}
      },
      controller:'szResuleController',
      controllerAs: 'vm'
    });
  });