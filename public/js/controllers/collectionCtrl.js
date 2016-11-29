angular.module('myApp')
    .controller('collectionCtrl', function($scope, $location, $anchorScroll, mainService){

        // GET ALL PRODUCTS CALL TO MAIN SERVICE
        mainService.getAllProducts().then(function(response){
            $scope.products = response.data;
            console.log(response.data);
        })

        

})
