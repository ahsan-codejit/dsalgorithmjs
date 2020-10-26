require('module-alias/register');
const expect = require('chai').expect;

const digitMaps = require('@src/katas/bankocr/digitMaps');

describe('#BankOCR digitMaps', () => {
    let horizontalChar = '_';
    let verticalChar = 'I';
    let emptyChar = ' ';

    let eee = emptyChar + emptyChar + emptyChar;
    let ehe = emptyChar + horizontalChar + emptyChar;
    let vev = verticalChar + emptyChar + verticalChar;
    let vhv = verticalChar + horizontalChar + verticalChar;
    let eev = emptyChar + emptyChar + verticalChar;
    let ehv = emptyChar + horizontalChar + verticalChar;
    let vhe = verticalChar + horizontalChar + emptyChar;
    let digits = digitMaps(horizontalChar, verticalChar, emptyChar);

    it('should have 0 value', () => {
        expect(digits[ehe + vev + vhv]).to.equal(0);
    });

    it('should have 1 value', () => {
        expect(digits[eee + eev + eev]).to.equal(1);
    });
    it('should have 2 value', () => {
        expect(digits[ehe + ehv + vhe]).to.equal(2);
    });
    it('should have 3 value', () => {
        expect(digits[ehe + ehv + ehv]).to.equal(3);
    });
    it('should have 4 value', () => {
        expect(digits[eee + vhv + eev]).to.equal(4);
    });
    it('should have 5 value', () => {
        expect(digits[ehe + vhe + ehv]).to.equal(5);
    });
    it('should have 6 value', () => {
        expect(digits[ehe + vhe + vhv]).to.equal(6);
    });
    it('should have 7 value', () => {
        expect(digits[ehe + eev + eev]).to.equal(7);
    });
    it('should have 8 value', () => {
        expect(digits[ehe + vhv + vhv]).to.equal(8);
    });
    it('should have 9 value', () => {
        expect(digits[ehe + vhv + ehv]).to.equal(9);
    });
});
