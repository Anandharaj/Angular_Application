/******************************* Configuration module **********************************************/ 

var stdaStates = {

	'login': {'name': 'login', 'url':'/login', 'templateUrl': 'views/login_view.html', 'controller': 'loginCtrl'}

};

var apiStates = stdaStates;

kot.config(['$stateProvider', '$urlRouterProvider', function(stateProvider, urlRouterProvider) {
	for (state in apiStates) {
		stateProvider.state(apiStates[state]);
	}
	urlRouterProvider.otherwise('/login');
}]);