angular.module('home.controller',['services'])
      .controller('homeCtrl',['$scope','loginService','homeService',HomeController]);

function HomeController($scope,loginService,homeService) {
    $scope.cred = loginService.credentials();
    $scope.user = loginService.user;
}