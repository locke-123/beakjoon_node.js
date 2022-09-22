const fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(s => parseInt(s));
let input = fs.readFileSync('example.txt').toString().split(' ').map(s => parseInt(s));

let A = input[0];
let B = input[1];
let C = input[2];

let i = 0;
let income = 0;
let cost = A;

while(cost > income){
    if(B >= C){
        i = -1;
        break;
    }
    i++;
    income += C;
    cost += B;
}

console.log(i);