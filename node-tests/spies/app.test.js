const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe( 'App', () => {
	var db = {
		saveUser: expect.createSpy()
	};

	app.__set__('db', db);

	// it( 'should call the spy correct', () => {
	// 	var spy = expect.createSpy();
	// 	spy(  );
	// 	expect( spy ).toHaveBeenCalled();
	// } );

	it('should call saveUser with the user object', () => {
		var email = 'test@test.com';
		var pwd = 'abc';

		app.handleSignup( email, pwd );
		expect( db.saveUser ).toHaveBeenCalledWith( {email, pwd} );
	});
});
