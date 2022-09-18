const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split(' ').map(s => parseInt(s));
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(s => parseInt(s));

let [A,B,C] = input; //배열 비구조화 할당 (구조분해)

console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C) * (B%C))%C);