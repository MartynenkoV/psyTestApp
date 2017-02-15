'use strict';

angular.module('nonverbalTestsApp.sbcTest')
    .factory('sbcFactory', function($http,LocaleService) {

       
        var questions = {data:null};
        var getData = function(questions) {
            var fileName = '';
            if(LocaleService.getLocaleDisplayName()==='Русский'){
                fileName = 'si-ru.json';
            }else{
                fileName = 'si-en.json';
            }
            
            $http.get('assets/jsons/'+fileName).success(function(data) {
                questions.data = data;
            });
            
            console.log(LocaleService.getLocaleDisplayName());
        };
        getData(questions);
        
        
        return {
            changeData: function(){
                getData(questions);
            },
            getQuestion: function(id) {
                if (id < questions.data.length) {
                    return questions.data[id];
                }
                else {
                    return false;
                }
            }
        };

    });