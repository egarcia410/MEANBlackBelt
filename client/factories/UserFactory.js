
myApp.factory('UserFactory', function($http, $location){
	var obj ={};

	obj.loggedInUser;

	// obj.session = function(cb){
	// 	$http.get('/session').success(function(user){
	// 		obj.sessionUser = user;
	// 		cb(user);
	// 	});
	// }

	obj.create = function(name){
		var user = {name: name}
		$http.post('/', user).success(function(user){
			obj.loggedInUser = user;
			$location.path('/dashboard')
		});
	}
	// obj.add = function(name){
	// 	var newName = {name: name};
	// 	$http.post('/customers', newName);
	// }

	// obj.remove = function(customerID, callback){
	// 	$http.delete('/customers/' + customerID).success(callback)
	// }

	// obj.getAllCustomers = function(callback){
	// 	$http.get('/customers').success(callback);
	// }

	return obj;
})