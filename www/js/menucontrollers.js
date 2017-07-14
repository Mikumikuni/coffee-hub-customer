angular.module('menu.controllers', [])
.controller('MenuCtrl', function($scope,$state) {
     $scope.gotoHome =function(){
        $state.go('app.home')
    }
     $scope.gotoFavorite =function(){
        $state.go('favorite')
    }
    $scope.gotoTabs =function(){
        $state.go('tabs')
    }
     $scope.gotoHistory =function(){
        $state.go('history')
    }
     $scope.gotoLogin =function(){
        $state.go('login')
    }
})
