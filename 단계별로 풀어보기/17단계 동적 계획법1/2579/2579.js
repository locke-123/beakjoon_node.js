const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s=>parseInt(s.trim()));
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s=>parseInt(s.trim()));
let N = input[0];
let memo = [];
memo[1] = input[1];
memo[2] = input[1] + input[2];
memo[3] = Math.max(input[1],input[2]) + input[3];
for(let i=4; i<input.length; i++){
    memo[i] = Math.max(memo[i-3]+input[i-1],memo[i-2])+input[i];
}
console.log(memo[N])

/*
f(1) = st[1]
f(2) = st[1] + st[2]
f(3) = max(st[1],st[2]) + st[3]
f(4) = max(f(1)+st[3],f(2)) + st[4]
*/