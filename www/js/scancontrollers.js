angular.module('scan.controllers', [])
.controller('ScanCtrl', function($scope,$state) {
     $scope.gotoSend =function(){
        $state.go('send')
    }
 
})