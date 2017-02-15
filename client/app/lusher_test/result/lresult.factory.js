'use strict';

angular.module('nonverbalTestsApp.lusherTest')
    .factory('lusherResultFactory', function(LocaleService, $http, $q) {
        //[1, 2, 6, 5, 7, 3, 4, 0, 0, 1, 5, 6, 2, 3, 7, 4]
        var pairsArr = $q.defer();

        var getData = function() {
            var fileName = '';
            if (LocaleService.getLocaleDisplayName() === 'Русский') {
                fileName = 'l-ru.json';
            }
            else {
                fileName = 'l-en.json';
            }

            $http.get('assets/jsons/' + fileName).then(function(data) {
                pairsArr.resolve(data);
                // console.log(pairsArr);
            });
            return pairsArr.promise;
        };
        //getData();
        //console.log(pairsArr);


        var plusminusFormating = function(res1, res2, pairs) {
            if (res2.indexOf(res1[0]) > 5) {
                pairs.push('+' + res1[0] + '-' + res1[0]);
            }
            if (res1.indexOf(res2[0]) > 5) {
                pairs.push('+' + res2[0] + '-' + res2[0]);
            }
            if (res2.indexOf(res1[1]) > 5) {
                pairs.push('+' + res1[0] + '-' + res2[1]);
            }
            if (res1.indexOf(res2[1]) > 5) {
                pairs.push('+' + res2[0] + '-' + res1[1]);
            }

        };
        var result = function(data, pairs) {
            var result = [];
            for (var i = 0; i < data.length; i++) {
                if (pairs[data[i]] !== undefined) {
                    result.push(pairs[data[i]]);
                }
                else {
                   // console.log(data[i]);
                }
            }
            return result;
        };

        var pairFormating = function(res) {
            var res1 = res.slice(0, 8);
            var res2 = res.slice(8, 16);

            var pluspairs = [];
            var xxpairs = [];
            var egualpairs = [];
            var minuspairs = [];
            var plusminuspairs = [];

            var format = function(sign, index, pairs) {
                if ((res1[index] === res2[index]) && (res1[index + 1] === res2[index + 1])) {
                    pairs.push(sign + res1[index] + sign + res2[index + 1]);

                }
                else if ((res1[index] === res2[index + 1]) && (res1[index + 1] === res2[index])) {
                    pairs.push(sign + res1[index] + sign + res2[index]);

                }
                else {
                    pairs.push(sign + res1[index]);
                    pairs.push(sign + res1[index + 1]);

                    if (pairs.indexOf(sign + res2[index]) < 0) {
                        pairs.push(sign + res2[index]);
                    }
                    if (pairs.indexOf(sign + res2[index + 1]) < 0) {
                        pairs.push(sign + res2[index + 1]);
                    }
                }
            };

            format('+', 0, pluspairs);
            format('x', 2, xxpairs);
            format('=', 4, egualpairs);
            format('-', 6, minuspairs);
            plusminusFormating(res1, res2, plusminuspairs);

            var promise = getData();

            return promise.then(function(res) {
                //console.log(Object.values(res.data));
      
                return {
                    pl: result(pluspairs, res.data),
                    x: result(xxpairs, res.data),
                    eq: result(egualpairs, res.data),
                    m: result(minuspairs, res.data),
                    plm: result(plusminuspairs, res.data)
                };
            });
        };


        return {
            getResult: function(res) {
                return pairFormating(res);
            }
        };
    });