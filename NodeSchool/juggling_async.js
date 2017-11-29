// NodeSchool - LearnYouNode - Challenge #9

// This problem is the same as Challenge #8 (HTTP COLLECT) in that you need to use http.get(). 
// However, this time you will be provided with three URLs as the first three command-line arguments.
// You must collect the complete content provided to you by each of the URLs and print it to the console. 
// You don't need to print out the length, just the data as a String; one line per URL. 
// The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.

var http 	= require('http');
var urls 	= [ process.argv[2], process.argv[3], process.argv[4] ];

getURLData = ( url ) => {
	return new Promise( ( resolve, reject ) => {
		http.get( url, ( response ) => {
			var urlData = '';
			response.setEncoding('utf8');

			response.on( "data", ( data ) => {
				urlData += data;		
			} );

			response.on( "end", () => {
				resolve( urlData );
			} );
		} ).on( 'error', ( err ) => {
			 reject( err );
		} );
	} );
};

getURLData( urls[0] )
.then( ( result ) => {
	console.log( `URL1 Data: ${result}` );
	return getURLData( urls[1] );
} )
.then( ( result ) => {
	console.log( `URL2 Data: ${result}` );
	return getURLData( urls[2] );
} )
.then( ( result ) => {
	console.log( `URL3 Data: ${result}` );
} )
.catch(  ( error ) => {
	console.log( error );
} );
