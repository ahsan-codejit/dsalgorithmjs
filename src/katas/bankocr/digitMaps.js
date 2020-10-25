
let getDigitMaps = (horizontalChar, verticalChar, emptyChar) => {
    const digits = {};

    let eee = emptyChar + emptyChar + emptyChar;
    let ehe = emptyChar + horizontalChar + emptyChar;
    let vev = verticalChar + emptyChar + verticalChar;
    let vhv = verticalChar + horizontalChar + verticalChar;
    let eev = emptyChar + emptyChar + verticalChar;
    let ehv = emptyChar + horizontalChar + verticalChar;
    let vhe = verticalChar + horizontalChar + emptyChar;

    digits[ehe + vev + vhv] = 0;
    digits[eee + eev + eev] = 1;
    digits[ehe + ehv + vhe] = 2;
    digits[ehe + ehv + ehv] = 3;
    digits[eee + vhv + eev] = 4;
    digits[ehe + vhe + ehv] = 5;
    digits[ehe + vhe + vhv] = 6;
    digits[ehe + eev + eev] = 7;
    digits[ehe + vhv + vhv] = 8;
    digits[ehe + vhv + ehv] = 9;

    return digits;
}

module.exports = (horizontalChar, verticalChar, emptyChar) => {
    return getDigitMaps(horizontalChar, verticalChar, emptyChar);
}