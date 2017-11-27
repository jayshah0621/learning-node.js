console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
	try {
		var noteString = fs.readFileSync( 'notes-data.json' );
		return JSON.parse( noteString );
	} catch( err ) {
		return [];
	}
}

var saveNote = ( notes ) => {
	fs.writeFileSync( 'notes-data.json', JSON.stringify( notes ) );
};

var addNote = ( title, body ) => {
	var notes 	= fetchNotes();
	var note 	= {
					title,
					body
				};

	var duplicateNotes = notes.filter( ( note ) => note.title === title );

	if( duplicateNotes.length === 0 ) {
		notes.push( note );
		saveNote( notes );
		return note;
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
