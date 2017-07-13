angular.module('editprofile.controllers', [])
.controller('EditProfileCtrl', function($scope,$state) {
 $scope.gotoProfile =function(){
        $state.go('profile')
    }
})