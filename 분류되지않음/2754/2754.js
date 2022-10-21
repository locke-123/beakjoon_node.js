const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
//let input = fs.readFileSync('example.txt').toString().trim();

let score = ['A+','A0','A-','B+','B0','B-','C+','C0','C-','D+','D0','D-','F'];
let point = [4.3, 4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.7, 1.3, 1.0, 0.7, 0.0];
console.log(point[score.indexOf(input)].toFixed(1));