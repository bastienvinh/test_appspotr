"use strict";

//const readline = require('readline');
// const Application = require('./utils/console-utils');

const serverChallenge = require('./utils/server-challenge');
const operationData = require('./utils/operation-data');
const async = require('async');

function doOperation( data )
{
	let names = JSON.parse( data );
	
	// Normal comportment
	let operation = new operationData( names.quiz, {  } );

	// we start Indexing
	operation.startIndex();
	
	let theOne = operation.findTheOne();
	
	showResponse( names.question, theOne );
}

/**
 * Show the reponse from a template form
 */
function showResponse( question, response )
{
	console.log( `Question : ${ question }` );
	console.log( `Response : ${ response }` );
}


// Configure the server
serverChallenge.configure({
	end_call_server : doOperation
});

// We call server
serverChallenge.callServer();