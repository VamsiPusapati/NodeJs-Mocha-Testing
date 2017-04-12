var assert = require('assert');

var calc = require('./calc.js');

// 'describe' creates a suite of test cases.
// 'it' implements the test cases.

// Mocha passes a done object. done should called whenever the test case is finished.
// We can embed a describe in another describe. 
describe('Calculator Tests', function() {
	describe('Addition Tests', function() {
		it('returns 1 + 1 = 2', function(done) {
			assert.equal(calc.add(1, 1), 2);
			done();
		});

		it('returns 1 + -1 = 0', function(done) {
			assert.equal(calc.add(1, -1), 0);
			done();
		});
	});

	describe('Multiplication Tests', function() {
		it('returns 2 * 2 = 4', function(done) {
			assert.equal(calc.mul(2, 2), 4);
			done();
		});

		it('returns 0 * 4 = 4', function(done) {
			assert.equal(calc.mul(2, 2), 4);
			done();
		});
	});
});