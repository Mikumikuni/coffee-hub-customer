angular.module('addfavorite.controllers', [])
.controller('AddFavoriteCtrl', function($scope,$state) {
 $scope.gotoMenuShop =function(){
        $state.go('menushop')
    }
     $scope.gotoFavoriteMenu1 =function(){
        $state.go('favoritemenu1')
    }
    $scope.gotoFavorite =function(){
        $state.go('favorite')
    }
})