const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);
//let input = fs.readFileSync('example.txt').toString().trim().split(' ').map(BigInt);
let [n,m] = input;
console.log((n/m).toString());
console.log((n%m).toString());