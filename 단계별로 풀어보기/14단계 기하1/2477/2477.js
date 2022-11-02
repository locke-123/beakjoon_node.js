const fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
console.log(input);