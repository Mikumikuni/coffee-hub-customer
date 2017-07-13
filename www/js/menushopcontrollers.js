angular.module('menushop.controllers', [])
.controller('MenuShopCtrl', function($scope,$state) {
    $scope.gotoDrink =function(){
        $state.go('drink')
    } 
    $scope.gotoCart =function(){
        $state.go('cart')
    } 
    $scope.gotoCoffeeShop1 =function(){
        $state.go('coffeeshop1')
    } 
})