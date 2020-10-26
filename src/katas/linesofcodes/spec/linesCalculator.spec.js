require('module-alias/register');
const expect = require('chai').expect;

const linesCalculator = require('@src/katas/linesofcodes/linesCalculator');
const codesReader = require('@src/katas/linesofcodes/codesReader');

const codesFile = 'src/katas/linesofcodes/data/codes.cs';
let codes = codesReader.getCodes(codesFile);


let codesWithComments = '//testing \nusing System;\n//test\n/*sdkfjsdfjk */\nnamespace HelloWorld';
let codesWithoutComments = 'using System;\nnamespace HelloWorld';

describe('#LinesOfCode Calculator', () => {
    it(`linesCalculator.getArraysOfCodes should return an array of codes`, () => {
        expect(Array.isArray(linesCalculator.getArraysOfCodes(codes))).to.be.true;
    });

    it('should takes codes as string and return lines number', () => {
        expect(typeof linesCalculator.countLines(codes)).to.equal('number');
        expect(linesCalculator.countLines(codes)).to.equal(16);
    });

    it(`linesCalculator.removeMultiComments should return codes without multi comments`, () => {
        expect(linesCalculator.removeMultiComments(codesWithComments)).to.equal('//testing \nusing System;\n//test\nnamespace HelloWorld');
    });

    it(`linesCalculator.removeSingleComments should return codes without multi comments`, () => {
        expect(linesCalculator.removeSingleComments(codesWithComments)).to.equal('using System;\n/*sdkfjsdfjk */\nnamespace HelloWorld');
    });

    it(`linesCalculator.removeComments should return codes without comments`, () => {
        expect(linesCalculator.removeComments(codesWithComments)).to.equal(codesWithoutComments);
    });

    it(`linesCalculator.countExecutableLines should return count of executable codes`, () => {
        expect(linesCalculator.countExecutableLines(codesWithComments)).to.equal(2);
    });

    it(`linesCalculator.countExecutableLines should return count of executable codes`, () => {
        expect(linesCalculator.countExecutableLines(codes)).to.equal(11);
    });
    it(`linesCalculator.countSingleComments should return 1`, () => {
        expect(linesCalculator.countSingleComments(codes)).to.equal(1);
    });
});
