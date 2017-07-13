angular.module('send.controllers', [])
.controller('SendCtrl', function($scope,$state,$ionicPopup) {
     $scope.gotoScan =function(){
        $state.go('scan')
    }
    $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Alert!',
     template: 'คุณได้ส่ง Cupcoin เรียบร้อยแล้ว'

   });
   $state.go('app.home')
    }
})