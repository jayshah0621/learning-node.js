const request = require('request');

var getWeather = ( lat, lng, callback ) => {
	request( {
		url: `https://api.darksky.net/forecast/25e3e95ea74479851f6efd107fa34448/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		if( !error && response.statusCode === 200 ) {
			callback( undefined, {
				temperature: body.currently.temperature,
				feelsLike: body.currently.apparentTemperature
			} );
		} else {
			callback( `Either there was an error or couldn't connect to the server. Please try again.`  );
		}
	} );
}

module.exports = {
	getWeather
};
