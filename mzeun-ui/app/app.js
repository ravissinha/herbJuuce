'use strict';

var mZeun = angular.module('mZeun', []);

mZeun.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/Stores', {
            templateUrl: 'view/storeView.html',
            controller: 'StoreViewController'
        }).
        when('/Orders', {
            templateUrl: 'view/orderView.html',
            controller: 'OrderViewController'
        }).
        when('/Login', {
            templateUrl: 'view/loginView.html'
        }).
        when('/progress', {
            templateUrl: 'view/progressView.html',
            controller: 'ProgressViewController'
        }).
        when('/cart',{
        templateUrl: 'htmls/shoppingCart.htm',
        controller:   storeController
        }).
        otherwise({
            redirectTo: '/Stores'
        });
    }]);


mZeun.controller('StoreViewController', function($scope) {

    $scope.message = 'Store screen';

});


mZeun.controller('OrderViewController', function($scope) {

    $scope.message = 'orders screen';

});

mZeun.controller('ProgressViewController', function($scope) {

    $scope.message = 'In Progress';

});
