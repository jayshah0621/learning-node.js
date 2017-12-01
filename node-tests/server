const express = require('express');

var app = express();
const port = process.env.PORT || 3000;

app.get( '/', ( req, res ) => {
	res.send( 'Hello World!' );
} );

app.get( '/users', ( req, res ) => {
	var users = [{name: 'Jay', age: '28'}, {name: 'Dimpu', age: '29'}];
	res.send( users );
} );

app.listen( port, () => {
	console.log( `Server is up on port ${port}` );
} );

module.exports.app = app;
