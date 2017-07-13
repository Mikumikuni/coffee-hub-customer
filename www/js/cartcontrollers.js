angular.module('cart.controllers', [])
.controller('CartCtrl', function($scope,$state,$ionicPopup) {
 $scope.gotoAddFavorite =function(){
        $state.go('addfavorite')
    } 

       $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Alert!',
     template: 'คุณได้ทำการสั่งรายการอาหารแล้วกรุณาไปที่เค้าเตอร์เพื่อทำการชำระเงิน'

   });
   $state.go('qrcode')
    }
    })