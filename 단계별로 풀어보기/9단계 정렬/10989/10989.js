const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(Number);
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let N = input[0];
input.shift();

//카운팅 정렬을 사용하기
