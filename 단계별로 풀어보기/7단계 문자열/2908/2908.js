const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
//let input = fs.readFileSync('example.txt').toString().split(' ');

let A = '', B = '';

for(let i=2;i>=0;i--){
    A += input[0][i];
    B += input[1][i];
}
A = parseInt(A);
B = parseInt(B);

if(A > B){
    console.log(A);
} else {
    console.log(B);
}