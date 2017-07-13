angular.module('drink.controllers', [])
.controller('DrinkCtrl', function($scope,$state) {
     $scope.gotoHotCoffee =function(){
        $state.go('hotcoffee')
    }  
    $scope.gotoCart =function(){
        $state.go('cart')
    } 
    $scope.gotoMenuShop =function(){
        $state.go('menushop')
    } 
})