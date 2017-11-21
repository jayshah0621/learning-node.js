// NodeSchool - LearnYouNode - Challenge #8

// Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. 
// Collect all data from the server (not just the first "data" event) and then write two lines to the console.
// The first line you write should just be an integer representing the number of characters received from the server. 
// The second line should contain the complete String of characters sent by the server.


var http 	= require('http');
var url 	= process.argv[2];

http.get( url, ( response ) => {
	response.setEncoding('utf8');

	var httpData = '';

	response.on( "data", ( data ) => {
		httpData += data;
	} );

	response.on( "end", () => { 
		console.log( httpData.length );
		console.log( httpData ); 
	} );
} ).on( 'error', ( err ) => {
	 console.log( err );
} );