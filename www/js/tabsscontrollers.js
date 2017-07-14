angular.module('tabss.controllers', [])
.controller('TabssCtrl', function($scope,$state) {
   $scope.gotoTabs =function(){
        $state.go('tabs')
    } 
     $scope.gotoNearby =function(){
        $state.go('app.nearby')
    } 
     $scope.gotoEditProfile =function(){
        $state.go('editprofile')
    } 
     $scope.gotoQRCode =function(){
        $state.go('qrcode')
        
    } 
     $scope.gotoHome =function(){
        $state.go('app.home')
        
    } 
      $scope.gotoAddFavorite =function(){
        $state.go('addfavorite')
    }
    $scope.gotoFavoriteMenu1 =function(){
        $state.go('favoritemenu1')
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
   
})
