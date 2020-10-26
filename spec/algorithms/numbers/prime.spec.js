require('module-alias/register');
let assert = require('assert');
let prime = require('@algorithms/numbers/prime');
describe('#Prime', function () {
	describe('#isPrime', function () {
		it('should return true', function () {
			assert.equal(true, prime.isPrime(5));
		});
		it('should return true', function () {
			assert.equal(true, prime.isPrime(17));
		});
		it('should return true', function () {
			assert.equal(true, prime.isPrime(23));
		});
		it('should return false', function () {
			assert.equal(false, prime.isPrime(21), 'for number 21');
		});
	});
	describe('#getPrimeFactors', function () {
		it('should return an empty Array', function () {
			assert.equal(0, prime.getPrimeFactors(5).length, prime.getPrimeFactors(5));
		});
		it('should return an array with two factors', function () {
			assert.equal(2, prime.getPrimeFactors(15).length, console.log(prime.getPrimeFactors(15)));
		});
		it('should return an array of factors', function () {
			assert.equal(true, Array.isArray(prime.getPrimeFactors(69)), console.log(prime.getPrimeFactors(69)));
		});
	});
});