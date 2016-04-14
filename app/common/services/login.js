angular.module('login.service',[])
       .service('loginService',[loginService]);



function loginService() {

  var service = {};
  service.credentials = credentials;
  service.user = '';
  return service;


  function credentials() {
    return [
        {
            name: "Aju John",
            email: "aju.john@cuelogic.co.in",
            password:"123456"
        },
        {
            name: "Pranav Naxane",
            email: "pranav.naxane@cuelogic.co.in",
            password:"123456"
        },
        {
            name: "Tushar Mate",
            email: "tushar.mate@cuelogic.co.in",
            password:"123456"
        }
    ];
  }
};