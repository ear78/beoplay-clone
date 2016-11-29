angular.module('myApp')
    .directive('parallaxPic2Directive', function(){
        return {
            restrict: 'EA',
            link: function(scope, elem, attr){
                $(window).on('scroll', function(){
                    var scrollPosition = $(this).scrollTop();
                    if(scrollPosition > 1300){
                        elem.css({'transform': 'translateY(-' + scrollPosition/30 + '%)'});
                    }
                })
            }
        }
    })
