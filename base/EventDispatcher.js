/**
 * Global service variable
 */

var EventDispatcher = Class.extend({

	_listeners : {},

	addEventListener : function(type, listener){
		//check if listener type exist
		if(!this._isEventExists(type))
			this._listeners[type] = [];
		
		//add listener type to listeners
		this._listeners[type].push(listener);
	},

	removeEventListener : function(type, listener){
		//check if listener type exist
		if(this._isEventExists(type)){
			var index = this._listener[type].indexOf(listener);
			//remove listener if a property of listeners type
			if(index !== -1)
				this._listener[type].splice(index, 1);
		}
	},

	dispatchEvent:function(){
        var listeners;

        if(typeof arguments[0] !== 'string'){
            console.warn('EventDispatcher','First params must be an event type (String)')
        }else{
            listeners = this._listeners[arguments[0]];

            for(var key in listeners){
                //This could use .apply(arguments) instead, but there is currently a bug with it.
                // listeners[key](arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]);
            	
            	//refractored loop
            	listeners[key].apply(this, arguments);
            }
        }
    },

    _isEventExists : function(type){
    	return this._listeners[type];
    }

});