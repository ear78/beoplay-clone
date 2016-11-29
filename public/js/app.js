angular.module('myApp', ['ui.router', 'ngAnimate', 'smoothScroll'])
    .config(function($stateProvider, $urlRouterProvider){

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '../views/home.html',
            })
            .state('collection', {
                url: '/collection',
                templateUrl: '../views/collection.html',
                controller: 'collectionCtrl'
            })
            .state('shop', {
                url: '/shop',
                templateUrl: '../views/shop.html',
                controller: 'shopCtrl'
            })
            .state('product', {
                url: '/product/:id',
                templateUrl: '../views/product.html',
                controller: 'productCtrl'
            })
            .state('video1', {
                url: '/video1',
                templateUrl: '../views/video1.html'
            })
            .state('video2', {
                url: '/video2',
                templateUrl: '../views/video2.html'
            })
            .state('video3', {
                url: '/video3',
                templateUrl: '../views/video3.html'
            });
            $urlRouterProvider.otherwise('/');
    });
