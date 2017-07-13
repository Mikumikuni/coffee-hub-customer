angular.module('newspromotion.controllers', [])
.controller('NewsPromotionCtrl', function($scope,$state) {
    $scope.gotoNews =function(){
        $state.go('news')
    } 
     $scope.gotoHome =function(){
        $state.go('app.home')
    } 
})