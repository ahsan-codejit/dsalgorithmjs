## BankOCR
Simple solution approach of the problem https://ccd-school.de/en/coding-dojo/application-katas/bankocr/

### To run test for bankocr codes
- npm install mocha -g
- mocha './src/katas/bankocr/**/*.spec.js'
- Test with coverage -
- run "npm install nyc -g" (to install istanbul)
- run: "nyc mocha './src/katas/linesofcodes/**/*.spec.js'";

### To run scrip with file name, run following command
node src/katas/bankocr 'src/katas/bankocr/data/account.txt'