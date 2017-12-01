var db = require('./db.js');

module.exports.handleSignup = ( email, pwd ) => {
	db.saveUser( {email,pwd} );
};
