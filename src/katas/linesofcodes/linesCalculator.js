const multiCommentsReg = /\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g;
const singleCommentReg = /^\s*[/][/].*/gm;
const emptyLinesReg = /^\s*$/gm;
const splitingReg = /\r|\r\n|\n/;
let getArraysOfCodes = (codesString) => {
    let codes = codesString.split(splitingReg)
        .filter(line => !!line);
    return codes;
}

let removeComments = (codesWithComments) => {
    let codesWithoutComments = removeMultiComments(codesWithComments);
    codesWithoutComments = removeSingleComments(codesWithoutComments);

    return codesWithoutComments.replace(/(\n)+/gm, '\n')
        .replace(/^\n/, '');
}

let replaceExtraNewLines = (codesString) => {
    return codesString.replace(/(\n)+/gm, '\n')
        .replace(/^\n/, '');
}

let removeMultiComments = (codesString) => {
    let codes = codesString.replace(multiCommentsReg, '')
    return replaceExtraNewLines(codes);
}

let removeSingleComments = (codesString) => {
    let codes = codesString.replace(singleCommentReg, '');
    return replaceExtraNewLines(codes);
}

let countLines = (codesString) => {
    let codes = getArraysOfCodes(codesString);
    return codes.length;
}

let countExecutableLines = (codesString) => {
    let codes = removeComments(codesString)
    return getArraysOfCodes(codes).length;
}

let countSingleComments = (codesString) => {
    let totalLines = countLines(codesString);
    let codesWithoutSingleComments = removeSingleComments(codesString);
    let linesWithoutSingleComments = getArraysOfCodes(codesWithoutSingleComments).length;
    return totalLines - linesWithoutSingleComments;
}

module.exports = {
    getArraysOfCodes,
    countLines,
    removeComments,
    countExecutableLines,
    removeMultiComments,
    removeSingleComments,
    countSingleComments
}