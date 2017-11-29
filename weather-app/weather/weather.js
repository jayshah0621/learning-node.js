const request = require('request');

var getWeather = ( lat, lng ) => {
	return new Promise( ( resolve, reject ) => {
		request( {
			url: `https://api.darksky.net/forecast/25e3e95ea74479851f6efd107fa34448/${lat},${lng}`,
			json: true
		}, (error, response, body) => {
			if( !error && response.statusCode === 200 ) {
				resolve( {
					temperature: body.currently.temperature,
					feelsLike: body.currently.apparentTemperature
				} );
			} else {
				reject( `Either there was an error or couldn't connect to the server. Please try again.`  );
			}
		} );
	} );
};

module.exports = {
	getWeather
};
