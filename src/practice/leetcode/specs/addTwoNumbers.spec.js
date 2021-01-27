
const expect = require('chai').expect;
const lib = require('../addTwoNumbers');

describe(`#AddTwoNumbers`, () => {
    it(`addTwoNumbers should add two numbers (list node)`, () => {
        let numberListA = [3, 2, 1];
        let numberListB = [4, 3, 2];
        let numbersSum = [7, 5, 3];
        let nodeListA = lib.createNodeList(numberListA);
        let nodeListB = lib.createNodeList(numberListB);
        let nodeListSum = lib.createNodeList(numbersSum);
        let sum = lib.addTwoNumbers(nodeListA, nodeListB);
        expect(JSON.stringify(sum)).to.equal(JSON.stringify(nodeListSum));
    });
}); 