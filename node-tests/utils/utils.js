module.exports.multiply = ( a, b ) => Number(a) * Number(b);

module.exports.asyncAdd = ( a, b, cb ) => {
	setTimeout( () => {
		cb( a + b );
	}, 1000 );
};
