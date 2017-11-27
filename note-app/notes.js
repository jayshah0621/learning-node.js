console.log('Starting notes.js');

const fs = require('fs');

var addNote = ( title, body ) => {
	var notes = [];
	var note = {
		title,
		body
	};

	try {
		var noteString = fs.readFileSync( 'notes-data.json' );
		notes = JSON.parse( noteString );
	} catch( err ) {
		// console.log('Something went wrong while reading the note. Please try again.');
	}

	var duplicateNotes = notes.filter( ( note ) => note.title === title );

	if( duplicateNotes.length === 0 ) {
		notes.push( note );
		fs.writeFileSync( 'notes-data.json', JSON.stringify( notes ) );
		console.log('Note added succesfully.');
	}
};

var listNotes = () => {
	console.log( 'Listing all notes.' );
};

var readNote = ( title ) => {
	console.log( 'Reading note: ', title );
}

var removeNote = ( title ) => {
	console.log( 'Removing note: ', title );
}

module.exports = {
	addNote,
	listNotes,
	readNote,
	removeNote
};
