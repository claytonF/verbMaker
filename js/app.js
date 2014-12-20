

	//$.getJSON('data/verbData.min.json',function(verbData){
	
(function() {	
	
		// var data = $http.get('data/verbData.min.json').
		// success(function(){}).error(function(){});
		

		var app = angular.module('verbsApp', [ ]);

		app.controller("PostsCtrl", function($scope, $http) {
		  $http.get('data/verbData.min.json').
		    success(function(verbData) {
		      $scope.passedData = verbData.data;
		      console.log($scope.passedData);

		    }).
		    error(function(data) {
		      // log error
		      console.log('error');
		    });
		});

		//app.controller('verbsController',function(){
			//this.verbsData = verbData;
			//console.log(this.verbsData.data[0].id);

		//});

		// var verbs = 
		// [
		// 	{
		// 	'name':'falar',
		// 	'tense':'PI',
		// 	'en':'to speak'
		// 	},
		// 	{
		// 	'name':'Comer',
		// 	'tense':'PI',
		// 	'en':'to eat'
		// 	}
		// ];

	//});


})();