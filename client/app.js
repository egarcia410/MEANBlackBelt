var myApp = angular.module('myApp', ['ngRoute']);

		myApp.config(function($routeProvider){
			$routeProvider
			.when('/', {
				templateUrl: '/partials/login.html'
			})
			.when('/dashboard', {
				templateUrl: '/partials/dashboard.html'
			})
			.when('/create', {
				templateUrl: '/partials/create.html'
			})
			.when('/poll/:id', {
				templateUrl: '/partials/poll.html'
			})
			.otherwise('/')
		})
