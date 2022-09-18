const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split(' ');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
input = input.map(s => parseInt(s));

let H = input[0];
let M = input[1];

M = M-45;
if(M < 0) {
    H--;
    if(H < 0) {
        H = 24 + H;
    }
    M = 60 + M;
}

console.log(H,M);