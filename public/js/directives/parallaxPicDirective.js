angular.module('myApp')
    .directive('parallaxPicDirective', function(){
        return {
            restrict: 'EA',
            link: function(scope, elem, attr){
                $(window).on('scroll', function(){
                    var scrollPosition = $(this).scrollTop();
                    if(scrollPosition > 300) {
                        elem.css({'transform': 'translateY(-' + scrollPosition/20 + '%)'});
                    }

                })
            }
        }
    })
