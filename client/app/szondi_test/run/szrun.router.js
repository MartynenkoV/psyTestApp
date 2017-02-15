'use strict';

angular.module('nonverbalTestsApp.szondiTest')
  .config(function($stateProvider) {
    $stateProvider.state('szrun', {
      url: '/szondi',
      template: '<sztest></sztest>'
    });
  });