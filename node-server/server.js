const express = require( 'express' );
const hbs = require( 'hbs' );
const os = require('os');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

const username = os.userInfo().username;

hbs.registerPartials( __dirname + '/views/partials' );
app.set( 'view engine', 'hbs' );

app.use( ( req, res, next ) => {
	var now = new Date().toString();
	var log = `${now}: ${req.method} ${req.url}`;
	console.log( log );
	fs.appendFile('server.log', `${log} \n`, ( err ) => {
		if( err )
			console.log( `Unable to append to server.log.` );
	} );
	next(); // if next() isn't called, the app won't execute the code below. next(); indicates when we are done with the middle ware.
} );

// app.use( ( req, res, next ) => {
// 	res.render( 'maintenance.hbs' );
// } );

app.use( express.static( __dirname + '/public' ) );

hbs.registerHelper( 'getCurrentYear', () => {
	return new Date().getFullYear()
} );

hbs.registerHelper( 'shout', ( text ) => {
	return text.toUpperCase()
} );

app.get( '/', ( req, res ) => {
	res.render( 'home.hbs', {
		pageTitle: 'Home Page',
		username
	} );
} );

app.get( '/about', ( req, res ) => {
	res.render( 'about.hbs', {
		pageTitle: 'About Page'
	} );
} );

app.get( '/bad', ( req, res ) => {
	res.send({
		error: 'Page not found.'
	});
} );

app.listen( port, () => {
	console.log( `Server is up on port ${port}.` );
} );
