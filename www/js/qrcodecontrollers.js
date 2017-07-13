angular.module('qrcode.controllers', [])
.controller('QRCodeCtrl', function($scope,$state,$ionicPopup) {
$scope.gotoHome =function(){
        $state.go('app.home')
    } 
    $scope.gotoProfile =function(){
        $state.go('profile')
    } 
     })