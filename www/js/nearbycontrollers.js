angular.module('nearby.controllers', [])
.controller('NearbyCtrl', function($scope,$state) {
    $scope.gotoCoffeeShop1 =function(){
        $state.go('coffeeshop1')
    } 
     $scope.gotoFavorite =function(){
        $state.go('favorite')
    } 
     $scope.gotoNearby =function(){
        $state.go('app.nearby')
    } 
     $scope.gotoProfile =function(){
        $state.go('profile')
    } 
})
