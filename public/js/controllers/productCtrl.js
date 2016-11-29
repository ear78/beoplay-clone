angular.module('myApp')
    .controller('productCtrl', function($scope, mainService, $stateParams){


        mainService.getProduct($stateParams.id)
        .then(function(res){
                $scope.product = res.data[0];
                // console.log($scope.product);
            }, function(err) {
                console.log('Error getting product',err);
        });

        //ONCLICK GO TO PRODUCT PAGE
        $scope.addToCart = function(){
            mainService.addToCartArray($scope.product);
        }

        
    })
