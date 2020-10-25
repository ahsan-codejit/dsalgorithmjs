const number = require('./number');
const fs = require('fs');
const digitMaps = require('./digitMaps');
const ROW = 3;
const COLOUM = 3;
const ROW_DELIMIT = 1;
let getDataFromFile = (filename) => {
    let data = fs.readFileSync(filename, 'utf-8');
    return data.split('\n');
}

let getNumbersStrings = (filename) => {
    let data = getDataFromFile(filename);
    let numberStrings = [];
    for (let i = 0; i <= data.length; i += ROW + ROW_DELIMIT) {
        numberStrings.push(
            data.slice(i, i + ROW).join('\n')
        );
    }
    return numberStrings;
}

let getNumber = (digitMaps, numberPattern) => {

    return number.getDigits(digitMaps, numberPattern);
}

let getNumbers = (digitMaps, filename) => {
    return getNumbersStrings(filename)
        .map(numberString => getNumber(digitMaps, numberString))
}

module.exports = {
    getDataFromFile,
    getNumbersStrings,
    getNumber,
    getNumbers
}