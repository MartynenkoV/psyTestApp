'use strict';


class sbcResuleController {
    constructor($state) {
        //console.log($state.params.result);
        var tresult = Math.round(100 / 36 * $state.params.result);
        this.result = tresult;
    }

}


angular.module('nonverbalTestsApp.sbcTest')
    .controller('sbcResuleController', sbcResuleController);