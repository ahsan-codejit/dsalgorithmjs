require('module-alias/register');
const expect = require('chai').expect;

const codesReader = require('@src/katas/linesofcodes/codesReader');

const codesFile = 'src/katas/linesofcodes/data/codes.cs';

describe(`#LinesOfCodes readCodes`, () => {
    it(`should read and return codes from file as a string`, () => {
        expect(typeof codesReader.getCodes(codesFile)).to.be.string;
    });
});