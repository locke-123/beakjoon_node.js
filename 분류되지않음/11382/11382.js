const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(s => parseInt(s));
//let input = fs.readFileSync('example.txt').toString().trim().split(' ').map(s => parseInt(s));
let [A,B,C] = input;
console.log(A+B+C);