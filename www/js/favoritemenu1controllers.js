angular.module('favoritemenu1.controllers', [])
.controller('FavoriteMenu1Ctrl', function($scope,$state,$ionicPopup) {
 $scope.gotoMenuShop =function(){
        $state.go('menushop')
    }
    $scope.gotoFavorite =function(){
        $state.go('favorite')
    }
    
       $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Alert!',
     template: 'คุณได้ทำการสั่งรายการอาหารแล้วกรุณาไปที่เค้าเตอร์เพื่อทำการชำระเงิน'

   });
   $state.go('qrcode')
    }
})