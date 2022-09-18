const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split(' ').map(s => parseInt(s));
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(s => parseInt(s));

let A = input[0];
let B = input[1];

if(A === B){
    console.log('==');
} else if(A > B) {
    console.log('>');
} else {
    console.log('<');
}