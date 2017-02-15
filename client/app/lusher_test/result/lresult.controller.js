'use strict';


// class lResultController {
//     constructor($state, lusherResultFactory) {
//       this.facresult = lusherResultFactory.getResult($state.params.result);
//       this.facresult.then(function(res) {
//           setResult(res);
//       });
//       this.result;
//       //console.log(this.facresult);
//     }
//     setResult(data){
//         this.result = data;
//     }
// }


angular.module('nonverbalTestsApp.lusherTest')
    .controller('lResultController', function($state, lusherResultFactory,$scope){
        var promise = lusherResultFactory.getResult($state.params.result);
        promise.then(function(res){
            $scope.result = res;
            //console.log($scope.result);
        });
        
    });