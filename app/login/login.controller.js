angular.module('login.controller',['services'])
      .controller('loginCtrl',['$scope','loginService','$location',LoginController]);

function LoginController($scope,loginService,$location) {
    $scope.email = '';
    $scope.password = '';
    $scope.users = loginService.credentials();
    $scope.login = function(){
        var userFound = false;
        for(var i = 0; i < $scope.users.length; i++){
            if($scope.users[i].email == $scope.email && $scope.users[i].password == $scope.password) {
                userFound = true;
                loginService.user = $scope.users[i];
            }
        }
        if(!userFound) 
            $scope.message = "Authentication failed"; 
        else
            $location.path('/home');
    }
};