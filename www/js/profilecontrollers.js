angular.module('profile.controllers', [])
.controller('ProfileCtrl', function($scope,$state) {
 $scope.gotoFavorite =function(){
        $state.go('favorite')
    } 
     $scope.gotoNearby =function(){
        $state.go('app.nearby')
    } 
     $scope.gotoProfile =function(){
        $state.go('profile')
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
})