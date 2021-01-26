const expect = require('chai').expect;
const sort = require('../merge');
describe('#MergeSort', () => {
    it('should be a function', () => {
        expect(typeof sort.mergeSort).to.equal('function');
    });
    it('shoult return merged array', () => {
        expect(sort.merge([1, 3, 6], [2, 5, 8]).length).equal(6);
    })
    it('mergeSort should return array', () => {
        expect(sort.mergeSort([1]).length).to.equal(1);
        expect(sort.mergeSort([2, 1]).length).to.equal(2);
    });
    it('mergeSort should return sorted array', () => {
        let arr = [5, 3, 4, 2, 6, 1];
        let sArr = [1, 2, 3, 4, 5, 6];
        let sortedArr = sort.mergeSort(arr);
        expect(JSON.stringify(sortedArr)).to.equal(JSON.stringify(sArr));
    });
});