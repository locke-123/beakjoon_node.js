const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
//let input = fs.readFileSync('example.txt').toString().trim();
console.log(input.length);