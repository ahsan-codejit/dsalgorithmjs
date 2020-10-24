/*
    Hamming Distance
    Hamming distance is a metric for comparing two binary data strings. 
    While comparing two binary strings of equal length, Hamming distance is the number of bit positions 
    in which the two bits are different.
    The Hamming distance between two strings, a and b is denoted as d(a,b).
    It is used for error detection or error correction when data is transmitted over computer networks. 
    It is also using in coding theory for comparing equal length data words.    
    Example:
    Suppose there are two strings 1101 1001 and 1001 1101.
    11011001 ⊕ 10011101 = 01000100. Since, this contains two 1s, the Hamming distance, d(11011001, 10011101) = 2.
*/
require('module-alias/register');
const expect = require('chai').expect
let hammingDistance = require('@algorithms/string/hamming_distance');

describe('#Hamming Distance', () => {
    it('should return false', () => {
        let err = new Error('2 string arguments are required.');
        expect(hammingDistance('acb', 45)).to.equal(false);
    });
});
