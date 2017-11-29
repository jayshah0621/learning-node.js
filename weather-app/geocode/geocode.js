const request = require('request');

var geocodeAddress = ( address, callback ) => {
	var encodedAddress = encodeURIComponent( address );

	request( {
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
		json: true
	}, (error, response, body) => {
		if( error ) {
			callback( "Something went wrong. Please try again." );
		} else if( response.statusCode !== 200 ) {
			callback( "Unable to connect to the URL." );
		} else if( body.status === 'ZERO_RESULTS' ) {
			callback( "Unable to find the address. Please try a valid address." );
		} else if( body.status === 'OK' ) {
			callback( undefined, {
				address: body.results[0].formatted_address,
				latitude: body.results[0].geometry.location.lat,
				longitude: \
			} );
			console.log( `Address: ${body.results[0].formatted_address}` );
			console.log( `Lat: ${body.results[0].geometry.location.lat}` );
			console.log( `Long: ${body.results[0].geometry.location.lng}` );	
		}
	} );

};

module.exports = {
	geocodeAddress
};
