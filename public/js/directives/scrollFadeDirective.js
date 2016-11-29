angular.module('myApp')
    .directive('scrollFadeDirective', function(){
        return {
            restrict: 'EA',
            link: function(scope, elem, attrs){

                $(window).on('scroll', function(){
                    // console.log($(window).scrollTop());
                    if ($(window).scrollTop() > 11100) {
                        elem.css('opacity', 1 - ( ($(window).scrollTop() - 11100)/300))
                    }
                    if ($(window).scrollTop() > 11300) {
                        elem.addClass('height-relief-container');
                        TweenMax.to('#collectionIcelandFade', .3, {height: 0, ease: Power2.easeIn })
                    }
                    if ($(window).scrollTop() > 11600) {
                        TweenMax.to('#collectionIcelandFade', .5, {display: 'none'})
                    }

                })
            }
        }
    })
