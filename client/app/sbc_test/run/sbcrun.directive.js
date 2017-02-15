'use strict';

angular.module('nonverbalTestsApp.sbcTest')
  .directive('sbc',  function(sbcFactory, $state){
    
  return {
		restrict: 'E',
		scope: {},
		templateUrl: 'app/sbc_test/run/sbcrun.html',
		link: function(scope) {
			scope.start = function() {
				scope.id = 0;
				scope.score = 0;
				scope.progress = 0;
				sbcFactory.changeData();
				scope.getQuestion();
			};

			scope.getQuestion = function() {
				var q = sbcFactory.getQuestion(scope.id);
				if(q) {
					scope.imageUrl = q.imageUrl;
					scope.options = q.options;
					scope.answer = q.answer;
				} else {
					$state.go('sbcResult',{result : scope.score});
				}
			};

		
			scope.nextQuestion = function(number) {
			    if(number === scope.answer) {
					scope.score++;
				}
				//console.log(number + ' ' + scope.answer);
				//console.log(scope.score);
				scope.id++;
				scope.progress++;
				scope.getQuestion();
			};

			scope.start();
		}
	};
	
  }
  );
		