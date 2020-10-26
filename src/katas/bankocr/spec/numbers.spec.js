require('module-alias/register');
const expect = require('chai').expect;

const numbers = require('@src/katas/bankocr/numbers');
const getDigitMaps = require('@src/katas/bankocr/digitMaps');

describe('#BankOCR Number', () => {
    let digits = {};
    let horizontalChar = '_';
    let verticalChar = '|';
    let emptyChar = ' ';

    let digitMaps = getDigitMaps(horizontalChar, verticalChar, emptyChar);
    let file = 'src/katas/bankocr/data/account.txt';

    let numbersStrings = numbers.getNumbersStrings(file)

    it(`numbers.getDataFromFile should return  data`, () => {
        expect(Array.isArray(numbers.getDataFromFile(file))).to.be.true;
    });

    it(`numbers.getNumbersStrings should return  data`, () => {
        expect(Array.isArray(numbers.getNumbersStrings(file))).to.be.true;
        expect(numbersStrings.length).to.equal(2);
    });

    it(`numbers.getNumber should return 123456789`, () => {
        expect(numbers.getNumber(digitMaps, numbersStrings[0])).to.equal('123456789');
    });

    it(`numbers.getNumbers should return an array of numbers`, () => {
        let numberList = numbers.getNumbers(digitMaps, file);
        expect(Array.isArray(numberList)).to.be.true;
        expect(numberList.length).to.equal(2);
    });

});