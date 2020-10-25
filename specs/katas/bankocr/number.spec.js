require('module-alias/register');
const expect = require('chai').expect;

const number = require('@src/katas/bankocr/number');
const getDigitMaps = require('@src/katas/bankocr/digitMaps');

describe('#BankOCR Number', () => {
    let digits = {};
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

    digits[0] = ehe + vev + vhv;
    digits[1] = eee + eev + eev;
    digits[2] = ehe + ehv + vhe;
    digits[3] = ehe + ehv + ehv;
    digits[4] = eee + vhv + eev;
    digits[5] = ehe + vhe + ehv;
    digits[6] = ehe + vhe + vhv;
    digits[7] = ehe + eev + eev;
    digits[8] = ehe + vhv + vhv;
    digits[9] = ehe + vhv + ehv;

    let digitMaps = getDigitMaps(horizontalChar, verticalChar, emptyChar);
    let numberDigitsString = '    _  _     _  _  _  _  _ ' +
        '\n  I _I _II_II_ I_   II_II_I' +
        '\n  II_  _I  I _II_I  II_I _I' +
        '\n';

    let numberDigits = numberDigitsString.split('\n');

    it(`number.getDigit should return  9`, () => {
        expect(number.getDigit(digitMaps, digits[9])).to.equal(9);
    });

    it(`number.getDigitMatrix should return '     I  I'`, () => {
        expect(number.getDigitMatrix(numberDigits, 0)).to.equal('     I  I');
    })

    it(`number.getDigit should return  1`, () => {
        expect(number.getDigit(digitMaps, number.getDigitMatrix(numberDigits, 0))).to.equal(1);
    });

    it(`number.getDigitsPatterns should return array with 9 elements`, () => {
        expect(number.getDigitsPatterns(numberDigits).length).to.equal(9);
    })

    it(`number.getDigits should return 123456789`, () => {
        expect(parseInt(number.getDigits(digitMaps, numberDigitsString))).to.equal(123456789);
    });

});