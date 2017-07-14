angular.module('tabs.controllers', [])
.controller('TabsCtrl', function($scope,$state) {
     $scope.gotoHome =function(){
        $state.go('app.home')
    }
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
