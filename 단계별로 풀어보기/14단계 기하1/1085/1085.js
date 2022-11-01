const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
//let input = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number);
let [x,y,w,h] = input;
//왼쪽 x  오른쪽 w-x  아래 y 위 h-y
console.log(Math.min(x,w-x,y,h-y));