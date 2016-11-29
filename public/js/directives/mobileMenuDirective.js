angular.module('myApp')
    .directive('mobileMenuDirective', function(){
        return {
            restrict: 'EA',
            templateUrl: './views/directiveTemplates/mobileMenuDirective.html',
            link: function(scope, elem, attr) {
                // DROP MENU FOR SPEAKERS
                scope.flag = false;
                scope.toggleDropSpeakers = function(){
                    scope.flag = !scope.flag;
                }

                // DROP MENU FOR HEADPHONES
                scope.flag2 = false;
                scope.toggleDropHeadphones = function(){
                    scope.flag2 = !scope.flag2;
                }

                // MOBILE MENU TOGGLE
                scope.toggle = false;
                scope.toggleMenu = function(){
                    scope.toggle = !scope.toggle;
                }


            }
        }
    })
