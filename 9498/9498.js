const fs = require('fs');
//let input = parseInt(fs.readFileSync('example.txt').toString());
let input = parseInt(fs.readFileSync('/dev/stdin').toString());

let grade;
if(input >= 90) grade = 'A';
else if(input >= 80) grade = 'B';
else if(input >= 70) grade = 'C';
else if(input >= 60) grade = 'D';
else grade = 'F';

console.log(grade);