'use strict';

angular.module('nonverbalTestsApp.lusherTest')
    .directive('ltest', function($state) {

        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'app/lusher_test/run/lrun.html',
            link: function(scope) {
                scope.start = function() {
                    scope.result = [];
                    scope.hideColors = [false, false, false, false, false, false, false, false];
                    scope.quizPhase = true;
                    scope.colors = ['#766F65','#1B1B5B','#254842','#DF4523',
                                   '#F4DA3B','#9C234E','#AE5D28','#150812'];
                };
                scope.pickColor = function(number) {
                    //console.log('pick');

                    if (scope.quizPhase) {
                        scope.result.push(number);
                        scope.hideColors[number] = true;
                    }

                    if (scope.result.length === 7 || scope.result.length === 15) {
                        var lastColor = scope.hideColors.indexOf(false);
                        scope.result.push(lastColor);
                        scope.hideColors[lastColor] = true;

                        if(scope.result.length === 8){
                            scope.quizPhase = false;
                        }else{
                            $state.go('lresult',{result : scope.result});
                        }
                    }

                };
                scope.secondquiz = function(){
                    scope.hideColors = [false, false, false, false, false, false, false, false];
                    scope.quizPhase = true;
                };
                scope.start();
            }
        };

    });