'use strict'

const merge = require('../../node_modules/merge');

let CalculatorObject = (function () {
	
	class CalculatorObjectDDDClass {	
		
		constructor(data, configuration) {
			this["data"] = data;
			this['configruration'] = merge( { }, configuration  );
			this['indexation'] = new Map();
		}
		
		startIndex() {
			
			let collection = this["indexation"];
			// TODO : index everything
			
			for ( let i = 0; i < this["data"].length; ++i )
			{
				
				let value = collection.get( this["data"][i] );
				value = (value == null) ? 0 : value;
				
				collection.set( this["data"][i],  ++value ); 
				
			}
			
		}
		
		findTheOne()
		{
			let collection = this["indexation"];
			let it = collection.entries();
			
			let itElement = it.next(); 
			
			while ( itElement != null && itElement.value[1] > 1 )
				itElement = it.next();
				
			return ( itElement != null ) ? itElement.value[0] : null;
		}
	}
	
	
	
	
	Object.defineProperties(CalculatorObjectDDDClass, {
		"configuration" : {
			get : function() { return this['configuration']; },
			set: function(value) { throw new Error("You can set configuration"); },
			configurable: false,
			enumerable: false
		}
	});
	
	
	return CalculatorObjectDDDClass;
}) ();


// Exports Class
module.exports = CalculatorObject;