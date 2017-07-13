angular.module('detailhistory.controllers', [])
.controller('DetailHistoryCtrl', function($scope,$state,$ionicPopup) {
    $scope.gotoAddFavorite =function(){
        $state.go('addfavorite')
    } 
     $scope.gotoHistory =function(){
        $state.go('history')
    } 

       $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Alert!',
     template: 'คุณได้ทำการสั่งรายการอาหารแล้วกรุณาไปที่เค้าเตอร์เพื่อทำการชำระเงิน'

   });
   $state.go('qrcode')
    }
})