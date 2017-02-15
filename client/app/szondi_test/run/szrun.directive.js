'use strict';

angular.module('nonverbalTestsApp.szondiTest')
    .directive('sztest', function(sztestFactory, $state) {

        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'app/szondi_test/run/szrun.html',
            link: function(scope) {
                scope.start = function() {

                    scope.portraits = [];
                    scope.result = {
                        's': [0, 0],
                        'h': [0, 0],
                        'e': [0, 0],
                        'hy': [0, 0],
                        'k': [0, 0],
                        'p': [0, 0],
                        'd': [0, 0],
                        'm': [0, 0]
                    };
                    scope.hidePortraits = [false,false,false,false,false,false,false,false];
                    scope.progress = 0;
                    scope.count = 0;
                    scope.getPortraits();
                    scope.positivePhase = true;
                };

                scope.getPortraits = function() {
                    for(let i = 0; i<scope.hidePortraits.length;i++){
                        scope.hidePortraits[i] = false;
                    }
                   
                    scope.portraits = sztestFactory.getPortraits(scope.progress);
                    if (!scope.portraits) {
                        
                       // var str = JSON.stringify(scope.result);
                     //    console.log(str);
                        
                        $state.go('szresult',{result : scope.result});
                    }
                    scope.progress += 8;
                };

                scope.pickPortrait = function(number) {
                    scope.count++;
                    scope.hidePortraits[number] = true;
                    if (scope.positivePhase) {
                        scope.result[scope.portraits[number].drive][0]++;
                    }
                    else {
                        scope.result[scope.portraits[number].drive][1]++;
                    }

                    if (scope.count % 4 === 0) {

                        scope.positivePhase = !scope.positivePhase;

                        scope.getPortraits();
                    }
                    else if (scope.count % 2 === 0) {
                        scope.positivePhase = !scope.positivePhase;
                    }
                };

                scope.start();
            }
        };

    });