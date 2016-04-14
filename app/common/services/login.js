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
            email: "aju.john@cuelogic.co.in",
            password:"123456"
        },
        {
            email: "pranav.naxane@cuelogic.co.in",
            password:"123456"
        },
        {
            email: "tushar.mate@cuelogic.co.in",
            password:"123456"
        }
    ];
  }
};