angular.module('home.controller',['services'])
      .controller('homeCtrl',['$scope','loginService','homeService','$routeParams','$location','$route',HomeController]);

function HomeController($scope,loginService,homeService,$routeParams,$location, $route) {
    $scope.cred = loginService.user;
    $scope.user = homeService.getUserDetails($scope.cred,'email');
    $scope.employees = homeService.employees;
    $scope.page_id = "home";
    $scope.order_by = "name";
    //$routeParams
    $scope.toEdit = function (id) {
        $location.path('/edit/id/'+id);
    }
    $scope.toAdd = function () {
        $location.path('/add');
    }
    $scope.edit = function () {
        if(!homeService.isEmailAlreadyExists($scope.employee)){
            homeService.editUser($scope.employee);
            $location.path('/home');
        } else {
            $scope.err_email_message = "Email already exists";
        }
        //$scope.err_name_message = "Invalid name";
    }
    $scope.add = function () {
        if(!homeService.isEmailAlreadyExists($scope.employee)){
            homeService.addUser($scope.employee);
            $location.path('/home');
        } else {
            $scope.err_email_message = "Email already exists";
        }
        //$scope.err_name_message = "Invalid name";
    }
    $scope.delete = function(id) {
        if(confirm("Are you sure?")) {
            var emp = $scope.employees;
            $scope.employees = [];
            var index = 0;
            for(var i = 0; i < emp.length; i++){
                if(id != emp[i].id) {
                    $scope.employees[index++] = emp[i];
                }
            }
        }
    }
    $scope.editorsave = function () {
        if($scope.page_id=="add"){
            $scope.add();
        } else if($scope.page_id=="edit") {
            $scope.edit()
        }
    }
    if(typeof($routeParams.id) != 'undefined') {
        console.log("edit page called");
        $scope.message = "Add Page";
        $scope.title = "Edit Info";
        $scope.button_msg = "Edit";
        $scope.page_id = "edit";
        $scope.employee = homeService.getUserDetails($routeParams.id,'id');
    }
    if($route.current.$$route.data == "add") {
        $scope.message = "Edit Page";
        $scope.title = "Add Info";
        $scope.button_msg = "Save";
        $scope.page_id = "add";
        $scope.employee = {name:'', email:'',gender:'',number:''};
    }

}