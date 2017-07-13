angular.module('news.controllers', [])
.controller('NewsCtrl', function($scope,$state) {
 $scope.gotoNewsPromotion =function(){
        $state.go('newspromotion')
    } 
})