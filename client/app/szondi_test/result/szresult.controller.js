'use strict';


class szResuleController {
    constructor($state, szResultFactory,$scope) {
            var result = szResultFactory.getResult($state.params.result);
            
            result.then(function(res) {
                //  console.log(res);
                  $scope.vectorInfo = res.vectorsInfo;
                  $scope.mainDrives = res.mainDrives;
                 // console.log($scope.mainDrives);
               });
            
        }
        //{"s":[2,2],"h":[0,1],"e":[2,2],"hy":[0,2],"k":[1,1],"p":[3,1],"d":[2,1],"m":[2,2]}
}


angular.module('nonverbalTestsApp.szondiTest')
    .controller('szResuleController', szResuleController);