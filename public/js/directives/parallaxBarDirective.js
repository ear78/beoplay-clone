angular.module('myApp')
    .directive('parallaxBarDirective', function(){
        return {
            restrict: 'EA',
            link: function(scope, elem, attr){
                $(window).on('scroll', function(){
                    var scrollPosition = $(this).scrollTop();
                    if(scrollPosition > 600){
                        elem.css({bottom: -20 + scrollPosition/7});
                    }
                })
            }
        }
    })
