angular.module('comment.controllers', [])
.controller('CommentCtrl', function($scope,$state) {
     $scope.gotoCoffeeShop1 =function(){
        $state.go('coffeeshop1')
    } 
})