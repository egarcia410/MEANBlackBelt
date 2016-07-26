myApp.factory('SurveyFactory', function($http, $location){
	var obj = {};

	obj.show = function(callback){
		$http.get('/dashboard').success(callback);
	}

	obj.delete = function(surveyID, callback){
		$http.delete('/dashboard/' + surveyID).success(callback);
	}

	obj.create = function(survey){
		$http.post('/create', survey).success(function(survey){
			$location.path('/dashboard');
		});
	}

	obj.showOne = function(surveyID, callback){
		$http.get('/poll/' + surveyID).success(callback);
	}

	obj.vote = function(surveyID, index, callback){
		var index = {index: index}
		$http.put('/poll/' + surveyID, index).success(callback)
	}
	
	// obj.create = function(order, callback){
	// 	$http.post('/orders', order).success(callback)

	// }

	// obj.getAllOrders = function(callback){
	// 	$http.get('/orders').success(callback);
	// }
	return obj;
});