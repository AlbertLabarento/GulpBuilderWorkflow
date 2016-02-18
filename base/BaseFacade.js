/**
 *
 * BaseFacade Service
 * - inherited class of BramsFacade Services
 *
 * Written by: Albert Nerona Labarento Jr. <albertlabarento@gmail.com>
 */

var BaseFacade = Class.extend({

	AppConstants : null,
	
	Restangular : null,
	
	Service : null,
	
	service_name : null,

	callback : null,
	
	init : function(AppConstants, Restangular){
		this.AppConstants = AppConstants;
		this.Restangular = Restangular;
	},
	
	setService : function(service_name){
		this.setName(service_name);
		this.Service = this.Restangular.service(this.getUrl());
		return this;
	},

	setServiceController : function(controller_name){
		this.Service = this.Restangular.oneUrl(this.getUrl(controller_name));
		return this;
	},

	getService : function(){
		return this.Service;
	},

	setName : function(service_name){
		this.service_name = service_name;
		return this;
	},

	getName : function(){
		return this.service_name;
	},

	getUrl : function(controller){
		if(!controller)
			controller = '';
		else 
			controller = '/'+controller;

	 	return this.AppConstants.apiUrl+this.getName()+controller;
	},

	setCallback : function(callback){
		this.callback = callback;

		return this;
	},
	
	get : function(isObject){
		if(isObject)
			return this.Service.get();
		return this.Service.getList();
	},
	
	post : function(data){
		return this.Service.post(data);
	},
	
	put : function(resource, updatedList){
		return this.Restangular.all(this.getUrl()).customPUT(undefined, resource, updatedList);
	},
	
	remove : function(resource, toNotify){
		if(toNotify){

		}
		this.Service.one(resource).remove().then(this.callback.bind(this), this.errorCallback.bind(this));
	}, 
	
	errorCallback : function(){
		return 'Error Occured!';
	},

	searchByField : function(field, value){
		return this.Restangular.oneUrl(this.getUrl()+'?search='+field+':'+value);
	}

});

BaseFacade.$inject = ['AppConstants', 'Restangular'];

angular.module('bramsApp.facade', []);