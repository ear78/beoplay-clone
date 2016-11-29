angular.module('myApp')
    .service('mainService',function($http){
        var baseUrl = 'http://localhost:3000/api'
        this.getAllProducts = function(){
            return $http({
                method: 'GET',
                url: baseUrl + '/products'
            });
        }
        this.getProduct = function(id){
            return $http({
                method: 'GET',
                url: baseUrl + '/products/' + id
            });
        }

        //FUNCTION TO ADD TO CART
        var arr = [];
        this.addToCartArray = function(product){
            //if product is in array don't push
                for(var i = 0; i < arr.length; i++){
                    if(product.id === arr[i].id){
                    arr[i].quantity++;
                    arr[i].total = arr[i].quantity * arr[i].price;
                    this.cartArray = arr;
                    return;
                    }
                }

                product.quantity = 1;
                arr.push(product);
                arr[i].total = arr[i].quantity * arr[i].price;
                this.cartArray = arr;

            }

        //REMOVE FROM CART FUNCTION
        this.remove = function(product){
            for(var i = 0; i < arr.length; i++){
                if(arr[i].id === product.id){
                    arr[i].quantity--;
                    arr[i].total = arr[i].quantity * arr[i].price;
                    this.cartArray = arr;
                    if(arr[i].quantity === 0){
                        arr.splice(i, 1);
                        arr[i].total = arr[i].quantity * arr[i].price;
                        this.cartArray = arr;
                    }
                }

            }

        }







    })
