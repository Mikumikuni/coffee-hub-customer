angular.module('cupcoin.controllers', [])
.controller('CupcoinCtrl', function($scope,$state) {
     $scope.gotoHome =function(){
        $state.go('app.home')
    }
 
})