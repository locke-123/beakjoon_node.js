const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let [A,B] = input.map(BigInt);

let ans = '';
ans += A+B +'\n';
ans += A-B +'\n';
ans += A*B;
console.log(ans);