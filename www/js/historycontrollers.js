angular.module('history.controllers', [])
.controller('HistoryCtrl', function($scope,$state,$ionicPopup) {
     $scope.gotoDetailHistory =function(){
        $state.go('detailhistory')
    }
    $scope.gotoHome =function(){
        $state.go('app.home')
    }
})