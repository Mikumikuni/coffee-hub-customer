angular.module('register.controllers', [])
.controller('RegisterCtrl', function($scope,$state) {
     $scope.loginData={};
     $scope.doLogin=function(loginData){
        console.log('Firstname : '+ loginData.firstname + ' : ' +
        'Lastname : '+ loginData.lastname+' : ' +
        
        'Username : '+ loginData.username+' : ' +
        'Password : '+ loginData.password+' : ' +
 'Confirm Password : '+ loginData.confirmpassword+' : ' +
        'E-mail : '+ loginData.email+' : ' +
        'Telephone : '+ loginData.telephone+' : ' +
        'Address : '+ loginData.address)
        $state.go('tabss');
}

    $scope.gotoLogin=function(){
        $state.go('login')
    }
    
})