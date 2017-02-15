'use strict';

angular.module('nonverbalTestsApp', ['nonverbalTestsApp.szondiTest', 'nonverbalTestsApp.sbcTest', 'nonverbalTestsApp.lusherTest',
    'nonverbalTestsApp.constants', 'pascalprecht.translate', '720kb.socialshare',
    'tmh.dynamicLocale',
    'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router', 'ui.bootstrap',
    'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);})
   .config(function ($translateProvider, LOCALES) {
    
    $translateProvider.useStaticFilesLoader({
      prefix: 'assets/jsons/locale-',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage(LOCALES.preferredLocale);
    $translateProvider.useLocalStorage();
  }).config(function (tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
  }).config(function ($translateProvider) {
    $translateProvider.useMissingTranslationHandlerLog();
    $translateProvider.useSanitizeValueStrategy('escape');
  })
  ;
