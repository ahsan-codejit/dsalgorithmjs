const codesReader = require('./codesReader');
const linesCalculator = require('./linesCalculator');

let countExecutableLines = (codesFile) => {
    let codes = codesReader.getCodes(codesFile);
    console.log(linesCalculator.countExecutableLines(codes));
}


(() => {
    countExecutableLines(process.argv[2]);
})();