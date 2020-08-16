// import fs from 'fs';

let fs = require('fs');
fs.readFile('./package.json', (e, r) => e ? console.table(e) :
console.log(String(r)));