angular.module('home.controllers', [])
.controller('HomeCtrl', function($scope,$state) {
    $scope.gotoNearby =function(){
        $state.go('app.nearby')
    } 
    $scope.gotoCoffeeShop1 =function(){
        $state.go('coffeeshop1')
    } 
    $scope.gotoNewsPromotion =function(){
        $state.go('newspromotion')
    } 
     $scope.gotoNews =function(){
        $state.go('news')
    } 
     $scope.gotoFavorite =function(){
        $state.go('favorite')
    } 

     $scope.gotoProfile =function(){
        $state.go('profile')
    } 
})
