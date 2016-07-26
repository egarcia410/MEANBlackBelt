myApp.controller('SurveyController', function($scope, SurveyFactory, UserFactory, $routeParams){

	$scope.loggedInUser = UserFactory.loggedInUser;

	function show(){
		SurveyFactory.show(function(surveys){
			$scope.surveys = surveys
		})
	}

	show();

	$scope.delete = function(surveyID){
		SurveyFactory.delete(surveyID, show)
	}

	$scope.create = function(){
		$scope.survey.userID = $scope.loggedInUser;
		SurveyFactory.create($scope.survey);
	}

	function showOne(){
		SurveyFactory.showOne($routeParams.id, function(survey){
			$scope.survey = survey;
		});	
	}
	showOne()

	$scope.vote = function(surveyID, index){
		SurveyFactory.vote(surveyID, index, showOne)
	}
			
});