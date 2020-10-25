const COLUMN = 3;
let getDigit = (digitMaps, pattern) => {
    return digitMaps[pattern] >= 0 ? digitMaps[pattern] : '?';
}

let getDigitMatrix = (numberDigits, position) => {
    return numberDigits[0].substr(position, COLUMN) +
        numberDigits[1].substr(position, COLUMN) +
        numberDigits[2].substr(position, COLUMN);
}

let getDigitsPatterns = (numberDigits) => {
    let patterns = [];
    let length = numberDigits[0].length;
    for (let i = 0; i < length; i += COLUMN) {
        patterns.push(
            getDigitMatrix(numberDigits, i)
        );
    }
    return patterns;
}

let getDigits = (digitMaps, numberDigitsString) => {

    let numberDigits = numberDigitsString.split('\n');
    return getDigitsPatterns(numberDigits)
        .map(digit => getDigit(digitMaps, digit))
        .join('');
}

module.exports = {
    getDigit,
    getDigits,
    getDigitMatrix,
    getDigitsPatterns
} 