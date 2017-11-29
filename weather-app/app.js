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

geocode.geocodeAddress( argv.address, ( geoCodeError, geoCodeResults ) => {
	if( geoCodeError ) {
		console.log( geoCodeError );
	} else {
		console.log( `Address: ${geoCodeResults.address}` );
		weather.getWeather( geoCodeResults.latitude, geoCodeResults.longitude, ( weatherError, weatherResults ) => {
			if( weatherError ) {
				console.log( weatherError );
			} else {
		 		console.log( `It's currently ${weatherResults.temperature}. It feels like ${weatherResults.feelsLike}.` );
			}
		} );
	}
} );
