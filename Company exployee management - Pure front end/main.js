var module = angular.module('myApp',['ngRoute','customServices']);
module.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		 redirectTo: '/list'
	})
	.when('/list',{
		templateUrl:'list.html',
		controller:'userCtrl'
	})
	.when('/route1',{
		templateUrl:'newUser.html',
		controller:'newUsearCtrl'
	})
	.when('/route2',{
		templateUrl:'edit.html',
		controller:'editCtrl'
	});
}]);

module.controller('userCtrl',['$scope','myService', function($scope,myService) {
	$scope.fName = '';
	$scope.lName = '';
	$scope.passw1 = '';
	$scope.passw2 = '';
	$scope.users = myService.getdata();
	$scope.edit = true;
	$scope.error = false;
	$scope.incomplete = false; 
	$scope.$watch('passw1',function() {$scope.test();});
	$scope.$watch('passw2',function() {$scope.test();});
	$scope.$watch('fName', function() {$scope.test();});
	$scope.$watch('lName', function() {$scope.test();});

	$scope.test = function() {
	  if ($scope.passw1 !== $scope.passw2) {
	    $scope.error = true;
	    } else {
	    $scope.error = false;
	  }
	  $scope.incomplete = false;
	  if ($scope.edit && (!$scope.fName.length ||
	  !$scope.lName.length ||
	  !$scope.passw1.length || !$scope.passw2.length)) {
	     $scope.incomplete = true;
	  }
	};
	
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   
        $scope.reverse = !$scope.reverse; 
    };
   
    $scope.remove = function(id){				
		var index = -1;	
		var userArr = eval( $scope.users );
		for( var i = 0; i < userArr.length; i++ ) {
			if( userArr[i].id === id ) {
				index = i;
				break;
			}
		}
		$scope.users.splice( index, 1 );
		myService.setdata($scope.users);
		
		$scope.pageNum = [];		
		$scope.numberOfPages = Math.ceil($scope.users.length/$scope.pageSize); 
		
		
		for(var i=1 ;i<=$scope.numberOfPages;i++){
	    	$scope.pageNum.push(i);
	    	};
	    if($scope.currentPage>$scope.numberOfPages-1){
	    	$scope.currentPage--
	    }
	};	
	$scope.currentPage = 0;
    $scope.pageSize = 5;
    $scope.pageNum = [];
    $scope.numberOfPages = Math.ceil($scope.users.length/$scope.pageSize);                  
    for(var i=1 ;i<=$scope.numberOfPages;i++){
    	$scope.pageNum.push(i);
    	};
    	
   	$scope.Previous = function(){
   		if($scope.currentPage>0)
   			$scope.currentPage = $scope.currentPage-1	
   	};
   	
	$scope.Next = function(){
		console.log($scope.users);
   		if($scope.currentPage<3)
   			$scope.currentPage = $scope.currentPage+1	
   	};
   	
    $scope.setPage = function(num){ 
    	$scope.currentPage = num-1; 
    	};
    	
	 $scope.save= function(id){
	    	var editID = $scope.users.indexOf(id);
	        myService.setid(editID); 	
     };
}]);

module.filter('startFrom', function() {
    return function(input, start) {
    	
        start = +start; 
        console.log(start);
        console.log(input);
        return input.slice(start);
    }
});
module.controller('editCtrl',['$scope','myService', '$location',function($scope,myService,$location) {
	$scope.users = myService.getdata();
	var id = myService.getid();
	$scope.fName = $scope.users[id].fName;
    $scope.lName = $scope.users[id].lName; 
    $scope.Sex = $scope.users[id].Sex;
    
	$scope.editUser = function() {		
		$scope.users[id].fName = $scope.fName;
		$scope.users[id].lName = $scope.lName;
		$scope.users[id].Sex = $scope.Sex;
		myService.setdata( $scope.users); 	
	};
	$scope.back = function(){
		$location.path('/list');
	}
}]);

module.controller('newUsearCtrl',['$scope','myService','$location', function($scope,myService,$location){
    $scope.num = 19;
    $scope.users = myService.getdata();
	$scope.add = function(){  	
        $scope.users.push({"id" : $scope.num, "fName": $scope.fName,
       						"lName": $scope.lName,"Sex": $scope.Sex});
        myService.setdata($scope.users);   
    };
    $scope.back = function(){
    	$location.path('/list');
    	$scope.num++;
	}

}]);


