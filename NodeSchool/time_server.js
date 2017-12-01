// NodeSchool - LearnYouNode - Challenge #10

// Write a TCP time server!

// Your server should listen to TCP connections on the port provided by the first argument to your program. 
// For each connection you must write the current date & 24 hour time in the format: "YYYY-MM-DD hh:mm" followed by a newline character.
// After sending the string, close the connection.

const net 	= require('net');

var port 	= process.argv[2];
var now 	= new Date();

function addZero( i ) {
	return ( i < 10 ? '0' : '' ) + i;
}

var server = net.createServer( ( socket ) => {
	var year 	 = now.getFullYear();
	var month 	 = addZero( now.getMonth() + 1 );
	var date 	 = addZero( now.getDate() );
	var hours 	 = addZero( now.getHours() );
	var minutes  = addZero( now.getMinutes() );				
	var fullDate = `${year}-${month}-${date} ${hours}:${minutes}`;

	socket.write( `${fullDate}\n` );

	socket.end();
} );

server.listen( port );

// Output

// Current date & 24 hour time in the format: "YYYY-MM-DD hh:mm" followed by a newline character. 
// e.g. 2013-07-06 17:42
