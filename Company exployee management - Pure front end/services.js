angular.module("customServices", [])
    .factory('myService', function () {
        var service = {};
          	
        service.editID = 0
        service.users = [{id:1, fName:'Hege', lName:"Pege", Sex:"male"  },
						{id:2, fName:'Kim',  lName:"Pim" ,   Sex:"female"},
						{id:3, fName:'Sal',  lName:"Smith", Sex:"male" },
						{id:4, fName:'Jack', lName:"Jones", Sex:"male" },
						{id:5, fName:'John', lName:"Doe",  	Sex:"male" },
						{id:6, fName:'Peter',lName:"Pan",   Sex:"male" },
						{id:7, fName:'Rose',lName:"Portman",   Sex:"female" },
						{id:8, fName:'Marry',lName:"Monroe",   Sex:"female" },
						{id:9, fName:'Jenny',lName:"Jolie",   Sex:"female" },
						{id:10, fName:'Hege', lName:"Pege", Sex:"male"  },
						{id:11, fName:'Kim',  lName:"Pim" ,   Sex:"female"},
						{id:12, fName:'Sal',  lName:"Smith", Sex:"male" },
						{id:13, fName:'Jack', lName:"Jones", Sex:"male" },
						{id:14, fName:'John', lName:"Doe",  	Sex:"male" },
						{id:15, fName:'Peter',lName:"Pan",   Sex:"male" },
						{id:16, fName:'Rose',lName:"Portman",   Sex:"female" },
						{id:17, fName:'Marry',lName:"Monroe",   Sex:"female" },
						{id:18, fName:'Jenny',lName:"Jolie",   Sex:"female" }
						];
        service.getdata = function(){
        	return service.users;
        };
        service.setdata = function(arr){
        	service.users = arr;
        };
        service.getid = function(){
        	return service.editID;
        };
        service.setid = function(editID){
        	service.editID = editID;
        };
        return service;
    });
