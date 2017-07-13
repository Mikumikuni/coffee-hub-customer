angular.module('favorite.controllers', [])
.controller('FavoriteCtrl', function($scope,$state) {
     $scope.gotoAddFavorite =function(){
        $state.go('addfavorite')
    }
    $scope.gotoFavoriteMenu1 =function(){
        $state.go('favoritemenu1')
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
    $scope.gotoHome =function(){
        $state.go('app.home')
    } 
})