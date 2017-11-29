const request = require('request');

var geocodeAddress = ( address ) => {
	var encodedAddress = encodeURIComponent( address );

	return new Promise( ( resolve, reject ) => {
		request( {
			url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
			json: true
		}, (error, response, body) => {
			if( error ) {
				reject( "Something went wrong. Please try again." );
			} else if( response.statusCode !== 200 ) {
				reject( "Unable to connect to the URL." );
			} else if( body.status === 'ZERO_RESULTS' ) {
				reject( "Unable to find the address. Please try a valid address." );
			} else if( body.status === 'OK' ) {
				resolve( {
					address: body.results[0].formatted_address,
					latitude: body.results[0].geometry.location.lat,
					longitude: body.results[0].geometry.location.lng
				} );
			}
		} );
	} );
};

module.exports = {
	geocodeAddress
};
