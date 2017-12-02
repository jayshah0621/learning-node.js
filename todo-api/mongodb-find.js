const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect( 'mongodb://localhost:27017/ToDoApp', ( err, db ) => {
	if( err ) {
		return console.log( 'Unable to connect to the database server.' );
	}

	console.log('Connected to MongoDB server.');

	db.collection('ToDos').find({completed: false}).toArray().then( (docs) => {
		console.log( 'Todos' );
		console.log( JSON.stringify( docs, undefined, 2 ) );
	}, ( err ) => {
		console.log( err );
	});

	db.collection('ToDos').find({
		_id: new ObjectID('5a21c4c3a925ea336c63dfd4') 
	}).toArray().then( (docs) => {
		console.log( 'Todos' );
		console.log( JSON.stringify( docs, undefined, 2 ) );
	}, ( err ) => {
		console.log( err );
	});

	db.collection('ToDos').find().count().then( (count) => {
		console.log( `Todos Count: ${count}` );
	}, ( err ) => {
		console.log( err );
	});

	console.log( 'Collection: Users' );

	db.collection('Users').find({name: 'Jay Shah'}).toArray().then( (docs) => {
		console.log( 'Users ' );
		console.log( JSON.stringify( docs, undefined, 2 ) );
	}, ( err ) => {
		console.log( err );
	});

	db.collection('Users').find({name: 'Jay Shah'}).count().then( (count) => {
		console.log( `Users Count: ${count}` );
	}, ( err ) => {
		console.log( err );
	});

	db.close();
} );
