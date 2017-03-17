'use strict';


var mZeun = angular.module('mZeun', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/store', {
        templateUrl: 'view/store.htm',
        controller: storeController 
      }).
      when('/products/:productSku', {
        templateUrl: 'view/product.htm',
        controller: storeController
      }).
      when('/cart', {
        templateUrl: 'view/shoppingCart.htm',
        controller: storeController
      }).
      otherwise({
        redirectTo: '/store'
      });
}]);


mZeun.factory("DataService", function () {

    // create store
    var myStore = new store();

    // create shopping cart
    var myCart = new shoppingCart("mZeun");


    myCart.addCheckoutParameters("PayPal", "bernardo.castilho-facilitator@gmail.com");

    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
});

mZeun.controller('StoreViewController', function($scope) {

    $scope.message = 'Store screen';

});


mZeun.controller('OrderViewController', function($scope) {

    $scope.message = 'orders screen';

});

mZeun.controller('ProgressViewController', function($scope) {

    $scope.message = 'In Progress';

});
