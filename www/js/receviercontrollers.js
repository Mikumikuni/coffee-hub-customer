angular.module('recevier.controllers', [])
.controller('RecevierCtrl', function($scope,$state) {
     $scope.gotoHome =function(){
        $state.go('app.home')
    }
 
})