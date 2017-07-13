angular.module('coffeeshop1.controllers', [])
.controller('CoffeeShop1Ctrl', function($scope,$state) {
   $scope.gotoMenuShop =function(){
        $state.go('menushop')
    } 
     $scope.gotoHotCoffee =function(){
        $state.go('hotcoffee')
    } 
    $scope.gotoComment =function(){
        $state.go('comment')
    }
     $scope.gotoAllComment =function(){
        $state.go('allcomment')
    }  
    $scope.gotoNearby =function(){
        $state.go('app.nearby')
    } 
})
