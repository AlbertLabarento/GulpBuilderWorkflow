(function(){
	'use strict';

	var AppConstants = (function(){
		var cons = {};
			cons.urlProtocol = 'http://'; // Url Protocol
			cons.baseUrl = 'domain.dev'; // create your own domain instead of using localhost
			cons.basePath = '/src/'; // script resources base path
			cons.applicationName = 'MyApp'; 
			cons.apiUrl = 'api/v1/';

			return cons;
	}());

	function AppConfig(RestangularProvider, $urlRouterProvider, ...){
		// ... to do application's configuration
	}

	function AppInit($rootScope, Restangular ...){
		// ... to do instantiate workflow
	}

	// instantiate your main module
	
	angular.module('app', 
		[
		// List of dependencies
		'include', 
		'dependencies', 
		'here',
		// List of app's modules
		'app.dashboard',
		'app.user-profile'])
		// your app's initialization workflow
		.constant('AppConstants', AppConstants)
		.config(AppConfig)
		.run(AppInit);

})();