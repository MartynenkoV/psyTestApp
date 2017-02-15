'use strict';

angular.module('nonverbalTestsApp.sbcTest')
  .config(function($stateProvider) {
    $stateProvider.state('sbcrun', {
      url: '/social_intelegence',
      template: '<sbc></sbc>'
    });
  });