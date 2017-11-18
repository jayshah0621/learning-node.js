// NodeSchool - LearnYouNode - Challenge #5

// Create a program that prints a list of files in a given directory, filtered by the extension of the files. 
// You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') 
// and a file extension to filter by as the second argument.
// For example, if you get 'txt' as the second argument then you will need to filter the list to only files that end with .txt. 
// Note that the second argument will not come prefixed with a '.'

var fs 		= require('fs');
var path 	= require('path');

fs.readdir( process.argv[2], (err, dirContents) => {
	if( err ) {
		console.log( err );
	}

	var fileList = dirContents.filter( ( content ) => { 
		if( path.extname( content ) == '.' + process.argv[3] ) { 
			return true; 
		} 
	} );

	if( fileList.length ) {
		fileList.forEach( ( file ) => {
			console.log( file );
		} );
	}

	else console.log("No file found with the extension '" + process.argv[3] + "'.");
} );