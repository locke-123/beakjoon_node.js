const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().trim();
let input = fs.readFileSync('/dev/stdin').toString().trim();
//trim()을 통해 문자열 양끝의 공백 제거 (beakjoon   ??!와 같은 결과 제거)

console.log(input+'??!');