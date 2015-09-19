"use strict";

// const readline = require('readline');


// let consoleApp = readline.createInterface({ 
// 	input: process.stdin,
// 	output: process.stdout
// });

/**
 * This a utility class for application / Console type
 */
let ApplicationConsole = (function () {
	
	class BBclass
	{
		constructor() 
		{
			// Don't need cosntructor
			throw new Error("You can't not create instance ..."); 
		}
	
		/**
		 * End application by showing a message and ask for a key to continue end program
		 */
		static endApplication()
		{
			// TODO : add a readkey system like C#
			console.log("Put a key to coninue ...");
		}
		
	}
	
	return BBclass;
}) ();


module.exports = ApplicationConsole;