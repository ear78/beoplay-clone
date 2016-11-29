angular.module('myApp')
    .directive('parallaxTextDirective', function(){
        return {
            restrict: 'EA',
            link: function(scope, elem, attr){
                $(window).on('scroll', function(){
                    var scrollPosition = $(this).scrollTop();
                    if(scrollPosition > 1400){
                        elem.css({'bottom': -400 + scrollPosition/10});
                    }
                })
            }
        }
    })
