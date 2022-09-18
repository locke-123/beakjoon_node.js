const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => s.trim());
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => s.trim());

let needMin = parseInt(input[1]);
input = input[0].split(' ');
let H = parseInt(input[0]);
let M = parseInt(input[1]);

M = M+needMin;

while(M > 59) {
    H++
    if(H > 23) {
        H = H - 24;
    }
    M = M - 60;
}

console.log(H,M);