const expect = require('expect');

const utils = require('./utils');

describe( 'Utils', () => {
	it( 'should multiply two numbers', () => {
		var res = utils.multiply( 3, 10 );

		expect( res ).toBe( 30 );
	} );

	it( 'should async add 2 numbers', (done) => {
		utils.asyncAdd( 3, 9, ( sum ) => {
			expect( sum ).toBe(12).toBeA('number');
			done();
		} );
	} );
} );
