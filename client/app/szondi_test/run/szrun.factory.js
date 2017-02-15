'use strict';

angular.module('nonverbalTestsApp.szondiTest')
    .factory('sztestFactory', function() {
         var portraits = [{
                imageUrl: 'assets/images/szondi/11.jpg',
                drive: 'k'
            },
            {
                imageUrl: 'assets/images/szondi/12.jpg',
                drive: 's'
            },
            {
                imageUrl: 'assets/images/szondi/13.jpg',
                drive: 'p'
            },
            {
                imageUrl: 'assets/images/szondi/14.jpg',
                drive: 'd'
            },
            {
                imageUrl: 'assets/images/szondi/15.jpg',
                drive: 'h'
            },
            {
                imageUrl: 'assets/images/szondi/16.jpg',
                drive: 'e'
            },
            {
                imageUrl: 'assets/images/szondi/17.jpg',
                drive: 'm'
            },
            {
                imageUrl: 'assets/images/szondi/18.jpg',
                drive: 'hy'
            },
            {
                imageUrl: 'assets/images/szondi/21.jpg',
                drive: 'hy'
            },
            {
                imageUrl: 'assets/images/szondi/22.jpg',
                drive: 'm'
            },
            {
                imageUrl: 'assets/images/szondi/23.jpg',
                drive: 'e'
            },
            {
                imageUrl: 'assets/images/szondi/24.jpg',
                drive: 'h'
            },
            {
                imageUrl: 'assets/images/szondi/25.jpg',
                drive: 'd'
            },
            {
                imageUrl: 'assets/images/szondi/26.jpg',
                drive: 'p'
            },
            {
                imageUrl: 'assets/images/szondi/27.jpg',
                drive: 's'
            },
            {
                imageUrl: 'assets/images/szondi/28.jpg',
                drive: 'k'
            },
            {
                imageUrl: 'assets/images/szondi/31.jpg',
                drive: 'h'
            },
            {
                imageUrl: 'assets/images/szondi/32.jpg',
                drive: 'e'
            },
            {
                imageUrl: 'assets/images/szondi/33.jpg',
                drive: 's'
            },
            {
                imageUrl: 'assets/images/szondi/34.jpg',
                drive: 'm'
            },
            {
                imageUrl: 'assets/images/szondi/35.jpg',
                drive: 'k'
            },
            {
                imageUrl: 'assets/images/szondi/36.jpg',
                drive: 'd'
            },
            {
                imageUrl: 'assets/images/szondi/37.jpg',
                drive: 'hy'
            },
            {
                imageUrl: 'assets/images/szondi/38.jpg',
                drive: 'p'
            },
            {
                imageUrl: 'assets/images/szondi/41.jpg',
                drive: 'p'
            },
            {
                imageUrl: 'assets/images/szondi/42.jpg',
                drive: 'hy'
            },
            {
                imageUrl: 'assets/images/szondi/43.jpg',
                drive: 'd'
            },
            {
                imageUrl: 'assets/images/szondi/44.jpg',
                drive: 'k'
            },
            {
                imageUrl: 'assets/images/szondi/45.jpg',
                drive: 'm'
            },
            {
                imageUrl: 'assets/images/szondi/46.jpg',
                drive: 's'
            },
            {
                imageUrl: 'assets/images/szondi/47.jpg',
                drive: 'e'
            },
            {
                imageUrl: 'assets/images/szondi/48.jpg',
                drive: 'h'
            },
            {
                imageUrl: 'assets/images/szondi/51.jpg',
                drive: 'e'
            },
            {
                imageUrl: 'assets/images/szondi/52.jpg',
                drive: 'd'
            },
            {
                imageUrl: 'assets/images/szondi/53.jpg',
                drive: 'hy'
            },
            {
                imageUrl: 'assets/images/szondi/54.jpg',
                drive: 'p'
            },
            {
                imageUrl: 'assets/images/szondi/55.jpg',
                drive: 's'
            },
            {
                imageUrl: 'assets/images/szondi/56.jpg',
                drive: 'k'
            },
            {
                imageUrl: 'assets/images/szondi/57.jpg',
                drive: 'h'
            },
            {
                imageUrl: 'assets/images/szondi/58.jpg',
                drive: 'm'
            },
            {
                imageUrl: 'assets/images/szondi/61.jpg',
                drive: 'm'
            },
            {
                imageUrl: 'assets/images/szondi/62.jpg',
                drive: 'h'
            },
            {
                imageUrl: 'assets/images/szondi/63.jpg',
                drive: 'k'
            },
            {
                imageUrl: 'assets/images/szondi/64.jpg',
                drive: 's'
            },
            {
                imageUrl: 'assets/images/szondi/65.jpg',
                drive: 'p'
            },
            {
                imageUrl: 'assets/images/szondi/66.jpg',
                drive: 'hy'
            },
            {
                imageUrl: 'assets/images/szondi/67.jpg',
                drive: 'd'
            },
            {
                imageUrl: 'assets/images/szondi/68.jpg',
                drive: 'e'
            }
            
        ];

        return {
            getPortraits: function(start) {
                if (start < portraits.length-1) {
                    return portraits.slice(start, start+8);
                }
                else {
                    return false;
                }
            }
        };
    });