angular.module('menu.controllers', [])
.controller('MenuCtrl', function($scope,$state) {
     $scope.gotoHome =function(){
        $state.go('app.home')
    }
     $scope.gotoFavorite =function(){
        $state.go('favorite')
    }
    $scope.gotoCupCoin =function(){
        $state.go('cupcoin')
    }
     $scope.gotoHistory =function(){
        $state.go('history')
    }
     $scope.gotoLogin =function(){
        $state.go('login')
    }
})
