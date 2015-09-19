"use strict";

const request = require('../../node_modules/request');
const merge = require('../../node_modules/merge');

// This a singleoton and inject dependency pattern

let server_challenge = (function () {
	
	const MessageErrorInit =  "You must init server-challenge module."
	
	//const url = "https://api2.appspotr.com/givemeachallenge";
	let sym = Symbol("server_challenge-server_challenge");
	let instance = null;
	
	class CCClass
	{
		
		constructor(token) 
		{
			if ( token != sym )
				throw new Error("No instance possible ...");
				
			// Defaults Value
			this.configuration = {
				url: "https://api2.appspotr.com/givemeachallenge",
				end_call_server : null
			};
		}
		
		static configure( configuration  )
		{
			if ( configuration == null )
				throw new Error( "You have no configuration" );
				
			// Init all configuration
			instance.configuration = merge( instance.configuration, configuration );
		}
		
		static callServer()
		{
			if ( instance.configuration == undefined || instance.configuration == null )
				throw new Error( MessageErrorInit );
				
			let responseData = '';
			request
				.get(instance.configuration.url)
				.on('data', function (data) {
					// Chunk data truncated and merge into one
					responseData += data;
				})
				.on('end', function () {
					if ( instance.configuration.end_call_server != null && typeof( instance.configuration.end_call_server ) == 'function' ) 
						instance.configuration.end_call_server( responseData );
				});
		}
	}
	
	
	// Properties
	
	Object.defineProperty(CCClass, 'configuration', {	
		readable: true,
		enumerable: false,
		configurable: false,
		writable: true
	});
	
	// Create only once instance
	instance = new CCClass( sym );
	return CCClass;
	
}) ();

module.exports = server_challenge;