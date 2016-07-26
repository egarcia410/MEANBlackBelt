myApp.controller('UserController', function($scope, UserFactory, $routeParams){
	
	// UserFactory.session(function(data) {
	// 	$scope.session = data;
 // 		if(data.err) return;

 // 		$location.path('/dashboard');
	// });

	$scope.loggedInUser = UserFactory.loggedInUser;

	$scope.create = function(){
		UserFactory.create($scope.name);
	}


	// $scope.add = function(){
	// 	CustomerFactory.add($scope.name);
	// 	getAllCustomers();
	// 	$scope.name = '';
	// }

	// $scope.remove = function(customerID){
	// 	CustomerFactory.remove(customerID, getAllCustomers)
	// }

	// function getAllCustomers(){
	// 	CustomerFactory.getAllCustomers(function(customers){
	// 		console.log(customers)
	// 		$scope.customers = customers;
	// 	});
	// }
	// getAllCustomers();

});