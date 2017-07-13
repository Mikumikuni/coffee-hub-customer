angular.module('hotcoffee.controllers', [])
.controller('HotCoffeeCtrl', function($scope,$state) {
     $scope.gotoMenuShop =function(){
        $state.go('menushop')
    } 
    
     $scope.gotoCart =function(){
        $state.go('cart')
    } 
     $scope.gotoAddFavorite =function(){
        $state.go('addfavorite')
    } 
     $scope.gotoDrink =function(){
        $state.go('drink')
    } 
  
})