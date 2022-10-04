const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(s => parseInt(s));
//let input = fs.readFileSync('example.txt').toString().trim().split(' ').map(s => parseInt(s));
let [N,M] = input;
console.log(Math.abs(N-M));