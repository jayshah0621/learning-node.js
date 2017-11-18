// NodeSchool - LearnYouNode - Challenge #6

// This problem is the same as Challenge #5 but introduces the concept of modules. 
// You must write a module file to do most of the work. 
// The module must export a single function that takes three arguments: 
// the directory name, the filename extension string and a callback function, in that order. 
// The filename extension argument must be the same as what was passed to your program.
// You must not print directly to the console from your module file, only from your original program.

var lsFilter 	= require('./module_ls_filter');
var dirName 	= process.argv[2];
var fileExt 	= process.argv[3];

lsFilter( dirName, fileExt, (err, fileList) => {
	if( err ) {
		console.log( err );
	}

	if( fileList.length ) {
		fileList.forEach( ( file ) => {
			console.log( file );
		} );
	}

	else console.log("No file found with the extension '" + fileExt + "'.");	
} );