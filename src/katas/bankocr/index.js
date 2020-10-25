let reader = require('./numbers');
const getDigitMaps = require('./digitMaps');

let horizontalChar = '_';
let verticalChar = '|';
let emptyChar = ' ';

let digitMaps = getDigitMaps(horizontalChar, verticalChar, emptyChar);

let readNumbers = (filename) => {
    let numbers = reader.getNumbers(digitMaps, filename);
    numbers.forEach(number => console.log(number));
}


(() => {
    readNumbers(process.argv[2]);
})();