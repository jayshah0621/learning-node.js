// NodeSchool - LearnYouNode - Challenge #6

// Module file

var fs 		= require('fs');
var path 	= require('path');

module.exports = function( dirName, fileExt, cb ) {
	fs.readdir( dirName, (err, dirContents) => {
		if( err ) {
			return cb( err );
		}

		var fileList = dirContents.filter( ( content ) => { 
			if( path.extname( content ) == '.' + fileExt ) { 
				return true; 
			} 
		} );

		return cb( null, fileList ); // 'null' should be the first parameter when no error.
	} );
};