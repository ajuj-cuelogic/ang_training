angular.module('home.service',[])
       .service('homeService',[homeService]);



function homeService() {

    var service = {};
    service.employees = employees();
    service.getUserDetails = findUser;
    service.editUser = editUser;
    service.addUser = addUser;
    service.isEmailAlreadyExists = isEmailAlreadyExists;
    return service;

    function findUser (obj, by) {
        var employees = service.employees;
        for(var i = 0; i < employees.length; i++){
            var compare_val = employees[i].id;
            var compare_val_other = obj;
            if(by == "email"){
                compare_val = employees[i].email;
                compare_val_other = obj.email;
            }
            if(compare_val_other == compare_val) {
                return employees[i];
            }
        }
        return {};
    }

    function isEmailAlreadyExists (employee) {
        var employees = service.employees;
        for(var i = 0; i < employees.length; i++){
            if(employee.id != employees[i].id) {
                if(employee.email == employees[i].email) {
                    return true;
                }
            }
        }
        return false;
    }

    function saveUser() {

    }

    function editUser(employee) {
        for(var i = 0; i < service.employees.length; i++){
            if(employee.email == service.employees[i].email) {
                service.employees[i] = {
                                            id: service.employees[i].id,
                                            name: employee.name,
                                            email: employee.email,
                                            gender: employee.gender,
                                            number: employee.number
                                        }
            }
        }
        return false;
    }

    function addUser(employee) {
        var id = service.employees[service.employees.length-1].id + 1;
        console.log(id)
        service.employees[service.employees.length] =   {
                                                            id: id,
                                                            name: employee.name,
                                                            email: employee.email,
                                                            gender: employee.gender,
                                                            number: employee.number
                                                        }
    }

    function employees () {
        console.log("service called");
        return  [
            
            {
                id: "1",
                name: "Pranav Naxane",
                email: "pranav.naxane@cuelogic.co.in",
                gender: 'Male',
                number: '8989856321'
            },
            {
                id: "2",
                name: "Aju John",
                email: "aju.john@cuelogic.co.in",
                gender: 'Male',
                number: '7387540950'
            },
            {
                id: "3",
                name: "Richa Dagar",
                email: "richa.dagar@cuelogic.co.in",
                gender: 'Female',
                number: '9552011458'
            },
            {
                id: "4",
                name: "Tushar Mate",
                email: "tushar.mate@cuelogic.co.in",
                gender: 'Male',
                number: '9224454682'
            }
        ];
    }

};