let fs = require('fs');
let getCodes = (file) => {
    return fs.readFileSync(file, 'utf-8')
        .toString();
}

module.exports = {
    getCodes
}