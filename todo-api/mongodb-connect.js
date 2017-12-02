const MongoClient = require('mongodb').MongoClient;

MongoClient.connect( 'mongodb://localhost:27017/ToDoApp', ( err, db ) => {
	if( err ) {
		return console.log( 'Unable to connect to the database server.' );
	}

	console.log('Connected to MongoDB server.');

	db.collection('ToDos').insertOne({
		text: 'ToDo #1',
		completed: false
	}, ( err, res ) => {
		if( err ) {
			return console.log( 'Unable to insert todo', err );
		}

		console.log( JSON.stringify( res.ops, undefined, 2 ) );
	});

	db.collection('ToDos').insertOne({
		text: 'ToDo #2',
		completed: true
	}, ( err, res ) => {
		if( err ) {
			return console.log( 'Unable to insert todo', err );
		}

		console.log( JSON.stringify( res.ops, undefined, 2 ) );
	});

	db.collection('ToDos').insertOne({
		text: 'ToDo #3',
		completed: true
	}, ( err, res ) => {
		if( err ) {
			return console.log( 'Unable to insert todo', err );
		}

		console.log( JSON.stringify( res.ops, undefined, 2 ) );
	});

	db.collection('Users').insertOne({
		name: 'John Doe',
		age: 25,
		location: 'New York City'
	}, ( err, res ) => {
		if( err ) {
			return console.log( 'Unable to insert user', err );
		}

		console.log( JSON.stringify( res.ops, undefined, 2 ) );
	});

	db.collection('Users').insertOne({
		name: 'Andrew Mead',
		age: 26,
		location: 'Philadelphia'
	}, ( err, res ) => {
		if( err ) {
			return console.log( 'Unable to insert user', err );
		}

		console.log( JSON.stringify( res.ops, undefined, 2 ) );
	});

	db.collection('Users').insertOne({
		name: 'Richard Hendriks',
		age: 24,
		location: 'Palo Alto'
	}, ( err, res ) => {
		if( err ) {
			return console.log( 'Unable to insert user', err );
		}

		console.log( JSON.stringify( res.ops, undefined, 2 ) );
	});

	db.close();
} );
