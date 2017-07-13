angular.module('authen.controllers', [])
.controller('AuthenCtrl', function($scope,$state) {
   $scope.gotoFlogin =function(){
        $state.go('app.home')
    }
       $scope.gotoRegister =function(){
        $state.go('register')
    }
    $scope.loginData={
        username:'',
        password:''
    };
    
     $scope.doLogin=function(loginData){
        console.log('Username : '+ loginData.username + ' : ' +'Password : '+ loginData.password);
         if(loginData.username!== '' && loginData.password!== ''){
       $state.go('app.home');}
        
        else if(loginData.username!=='' ){
        alert("กรุณากรอก Password");
   }
        else if(loginData.password!== ''){
        alert("กรุณากรอก Username");
    }
        
        else{
        alert("กรุณากรอก Username&Password");
    }

 
  
     }})