const fs 	= require('fs');
const _ 	= require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const title = {
	describe: 'Note Title',
	demand: true,
	alias: 't'
};

const body = {
	describe: 'Note Body',
	demand: true,
	alias: 'b'
};

const argv = yargs
	.command( 'add', 'Add a new note', {
		title,
		body
	} )
	.command( 'list', 'List all notes' )
	.command( 'read', 'Read a note', {
		title
	} )
	.command( 'remove', 'Remove a note', {
		title
	} )
	.help()
	.argv;

var command = argv._[0];

switch( command ) {
	case 'add':
		var note = notes.addNote( argv.title, argv.body );
		if( note ) console.log( 'Note created succesfully.' );
		else console.log( `${argv.title} already exists.` );
		break;
	case 'list':
		var allNotes = notes.listNotes();
		console.log( `Listing ${allNotes.length} note(s)` );
		allNotes.forEach( ( note ) => { notes.logNote( note ); } );
		break;
	case 'read':
		var note = notes.readNote( argv.title );

		if( note ) {
			console.log( `${argv.title} found.` );
			notes.logNote( note );
		}else {
			console.log( `${argv.title} not found.` );
		}
		break;
	case 'remove':
		var noteRemoved = notes.removeNote( argv.title );
		var msg = noteRemoved ? `${argv.title} removed.` : `${argv.title} not found.`;
		console.log( msg );
		break;
	default:
		console.log('Command not recognized.');
		break;
}
