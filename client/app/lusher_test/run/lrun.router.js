'use strict';

angular.module('nonverbalTestsApp.lusherTest')
  .config(function($stateProvider) {
    $stateProvider.state('lrun', {
      url: '/lusher',
      template: '<ltest></ltest>'
    });
  });