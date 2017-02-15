'use strict';

angular.module('nonverbalTestsApp')
  .service('LocaleService', function ($translate, LOCALES, $rootScope, tmhDynamicLocale) {
    
    var localesObj = LOCALES.locales;

    // locales and locales display names
    var _LOCALES = Object.keys(localesObj);
    if (!_LOCALES || _LOCALES.length === 0) {
      console.error('There are no _LOCALES provided');
    }
    var _LOCALES_DISPLAY_NAMES = [];
    _LOCALES.forEach(function (locale) {
      _LOCALES_DISPLAY_NAMES.push(localesObj[locale]);
    });

    var currentLocale = $translate.proposedLanguage()||'en_US';
    //console.log(currentLocale);

    // METHODS
    var checkLocaleIsValid = function (locale) {
      return _LOCALES.indexOf(locale) !== -1;
    };

    var setLocale = function (locale) {
      if (!checkLocaleIsValid(locale)) {
        console.error('Locale name "' + locale + '" is invalid');
        return;
      }
      currentLocale = locale;
      $translate.use(locale);
    };

    // EVENTS
    $rootScope.$on('$translateChangeSuccess', function (event, data) {
      document.documentElement.setAttribute('lang', data.language);// sets "lang" attribute to html

      tmhDynamicLocale.set(data.language.toLowerCase().replace(/_/g, '-'));// load Angular locale
    });

    $rootScope.$on('$localeChangeSuccess', function () {
      console.log('language changed');
    });

    return {
      getLocaleDisplayName: function () {
        return localesObj[currentLocale];
      },
      setLocaleByDisplayName: function (localeDisplayName) {
        setLocale(
          _LOCALES[
            _LOCALES_DISPLAY_NAMES.indexOf(localeDisplayName)// get locale index
            ]
        );
      },
      getLocalesDisplayNames: function () {
        return _LOCALES_DISPLAY_NAMES;
      }
    };
  });