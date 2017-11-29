const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress( argv.address )
.then( ( location ) => {
	console.log( `Address: ${JSON.stringify( location, undefined, 2 )}.` );
	return weather.getWeather( location.latitude, location.longitude );
} )
.then( ( weatherResults ) => {
	console.log( `It's currently ${weatherResults.temperature}. It feels like ${weatherResults.feelsLike}.` );
} )
.catch( ( error ) => {
	console.log( error );
} );
