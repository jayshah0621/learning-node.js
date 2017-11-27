console.log("Starting app.js");

const fs 	= require('fs');
const _ 	= require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv 	= yargs.argv;

var command = argv._[0];
console.log(`Performing Operation: ${command}.`);

switch( command ) {
	case 'add':
		notes.addNote( argv.title, argv.body );
		break;
	case 'list':
		notes.listNotes();
		break;
	case 'read':
		notes.readNote( argv.title );
		break;
	case 'remove':
		notes.removeNote( argv.title );
		break;
	default:
		console.log('Command not recognized.');
		break;

}
