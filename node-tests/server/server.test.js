const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe( 'Server', () => {
	it('should return hello world response', (done) => {
		request(app)
		.get('/')
		.expect('Hello World!').
		end(done);
	} );

	it('should return users', (done) => {
		request(app)
		.get('/users')
		.expect(200)
		.expect( ( res ) => {
			expect(res.body).toInclude({
				name: 'Jay',
				age: '28'
			}
			);
		} ).
		end(done);
	} );
});
