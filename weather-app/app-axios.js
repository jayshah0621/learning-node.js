const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Get weather for the address',
			string: true
		}
	})
	.help()
	.alias('help','h')
	.argv;

var encodedAddress = encodeURIComponent( argv.address );
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get( geocodeURL )
.then( ( response ) => {
	if( response.data.status === 'ZERO_RESULTS' ) {
		throw new Error( 'Unable to find the address. Please try a valid address' );
	}

	var lat = response.data.results[0].geometry.location.lat;
	var lng = response.data.results[0].geometry.location.lng;
	var weatherURL = `https://api.darksky.net/forecast/25e3e95ea74479851f6efd107fa34448/${lat},${lng}`;

	console.log( `Address: ${response.data.results[0].formatted_address}.` ); 

	return axios.get( weatherURL );
} )
.then( ( response ) => {
	var temperature = response.data.currently.temperature;
	var feelsLike = response.data.currently.apparentTemperature;

	console.log( `Current temperature is ${temperature}. It feels like ${feelsLike}.` );
} )
.catch( ( error ) => {
	if( error.code === "ENOTFOUND" ) {
		console.log( "Unable to connect to the API servers." );	
	} else {
		console.log( error.message );
	}
} );
