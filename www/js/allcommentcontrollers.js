angular.module('allcomment.controllers', [])
.controller('AllCommentCtrl', function($scope,$state) {
    $scope.gotoCoffeeShop1 =function(){
        $state.go('coffeeshop1')
    } 
})