const fs = require('fs');
//let input = parseInt(fs.readFileSync('example.txt').toString());
let input = parseInt(fs.readFileSync('/dev/stdin').toString());

let count = 0;

let target = input;
let A = Math.floor(target/10);
let B = target%10;
let sum = A+B;
let newNumber = sum%10 + (B*10);
count++;

while(input !== newNumber) {
    target = newNumber;
    A = Math.floor(target/10);
    B = target%10;
    sum = A+B;
    newNumber = sum%10 + (B*10);
    count++;
}

console.log(count);