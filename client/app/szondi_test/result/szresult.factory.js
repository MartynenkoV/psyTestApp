'use strict';

angular.module('nonverbalTestsApp.szondiTest')
    .factory('szResultFactory', function(LocaleService, $http, $q) {

        var vectors = $q.defer();
        var drives = $q.defer();

        var getData = function() {
            var vfileName = '';
            var dfileName = '';
            if (LocaleService.getLocaleDisplayName() === 'Русский') {
                vfileName = 'szv-ru.json';
                dfileName = 'szd-ru.json';
            }
            else {
                vfileName = 'szv-en.json';
                dfileName = 'szd-en.json';
            }

            $http.get('assets/jsons/' + vfileName).then(function(data) {
                vectors.resolve(data);
            });
            $http.get('assets/jsons/' + dfileName).then(function(data) {
                drives.resolve(data);
            });

            return $q.all([vectors.promise, drives.promise]);
        };




        var formatKey = function(drivename, drive1, drive2) {
            var drive1res = '';
            var drive2res = '';
            var res = drivename + ' ';

            if (drive1[0] > 0) {
                if (drive1[1] > 0) {
                    drive1res += '+/-';
                }
                else {
                    drive1res += '+';
                }
            }
            else if (drive1[1] > 0) {
                drive1res += '-';
            }
            else {
                drive1res += '0';
            }

            if (drive2[0] > 0) {
                if (drive2[1] > 0) {
                    drive2res += '+/-';
                }
                else {
                    drive2res += '+';
                }
            }
            else if (drive1[1] > 0) {
                drive2res += '-';
            }
            else {
                drive2res += '0';
            }

            res += drive1res + ' ' + drive2res;

            return res;
        };
        var getVectorsInfo = function(testResult, vectors) {
            //{'s':[2,2],'h':[0,1],'e':[2,2],'hy':[0,2],'k':[1,1],'p':[3,1],'d':[2,1],'m':[2,2]}
            //formatKey('S',testResult['s'],testResult['h']);
            var vectorsInfo = {
                S: vectors[formatKey('S', testResult.h, testResult.s)],
                P: vectors[formatKey('P', testResult.e, testResult.hy)],
                Sch: vectors[formatKey('Sch', testResult.k, testResult.p)],
                C: vectors[formatKey('C', testResult.d, testResult.m)]
            };
            return vectorsInfo;
        };
        var getMainDrive = function(testResult,drives) {
            var result = [];
            for (var drive in testResult) {
                let arr = testResult[drive];
                if (arr[0] >= 3 || arr[1] >= 3) {
                    result.push(drives[drive]);
                }
            }
            return result;
        };

       
        

        return {
            getResult:function(testResult) {
               var promise = getData();
               
               return promise.then(function(res) {
                  // console.log(res[0].data);
                   //console.log(res[1].data);
                   return{
                       vectorsInfo:getVectorsInfo(testResult,res[0].data),
                       mainDrives:getMainDrive(testResult,res[1].data)
                   };
               });
        }
            
        };
        
    });