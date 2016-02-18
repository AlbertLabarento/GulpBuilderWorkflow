/**
 * BaseController.
 * - inherited class of application controller.
 *
 */

var BaseController = Class.extend({
	/**
	 * [$scope parent scope]
	 * @type {[type]}
	 */
	$scope : null, 
	/**
	 * [AppConstants parent application constants]
	 * @type {[type]}
	 */
	AppConstants : null,
	/**
	 * [$rootScope parent root scope]
	 * @type {[type]}
	 */
	$rootScope : null,
	/**
	 * [init Initialize parent controller]
	 * @param  {[type]} scope          [$inject $scope]
	 * @param  {[type]} rootScope      [$inject $rootScope]
	 * @param  {[type]} AppConstants [$inject AppConstants]
	 * @return {[void]}                
	 */
	
	init : function(scope, rootScope, AppConstants){
		this.$scope = scope;
		this.AppConstants = AppConstants;
		this.$rootScope = rootScope;
		this.defineListeners();
		this.defineScope();
		this.setPageTitle('Route State Title Page...');
	},
	/**
	 * [defineListeners overidden]
	 * @return {[void]} [defines $scope.on destroy watcher]
	 */
	defineListeners : function(){
		this.$scope.$on('$destroy', this.destroy.bind(this));
	},
	/**
	 * [defineScope overidden]
	 * @return {[void]} 
	 */
	defineScope : function(){

	},
	/**
	 * [destroy overidden]
	 * @return {[void]} 
	 */
	destroy : function(){
		
	},
	/**
	 * [setPageTitle Sets the title page page via a rootScope]
	 * @param {[type]} title [description]
	 */
	setPageTitle : function(title){
		// this.$rootScope.pageTitle = title; 
	},
	/**
	 * [_handleRequestError handles server request error]
	 * @return {[type]} [description]
	 */
	_handleRequestError : function(){
		//notify if error occured
		throw this.AppConstants.serverError;
	},
	/**
	 * [_handleScriptError handles client script error]
	 * @return {[type]} [description]
	 */
	_handleScriptError : function(){
		throw this.AppConstants.scriptError;
	}
});

BaseController.$inject = ['$scope', '$rootScope', 'AppConstants'];