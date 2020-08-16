const fs = require('fs');
fs.readFile('package.json', (err, data) => { (err) ? console.log(err) : console.log(data)});
