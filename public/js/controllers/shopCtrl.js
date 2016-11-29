angular.module('myApp')
    .controller('shopCtrl', function($scope, mainService){
        $scope.quantity = 0;

        $scope.countUp = function(product){
            mainService.addToCartArray(product)
        };

        $scope.countDown = function(product){
            mainService.remove(product);
        }

        $scope.cart = mainService.cartArray;


        var getTotal = function(){
            if(!$scope.cart){
                $scope.cartTotal = {total: 0};
            }
            else {
                $scope.cartTotal = $scope.cart.reduce(function(p,c){
                    return {total: p.total + c.total}
                })
            }
        }
        getTotal();


})
