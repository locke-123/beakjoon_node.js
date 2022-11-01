const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => s.trim());
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => s.trim());

let N = parseInt(input[0]);

let target = input[1];
let sum = 0;
for(let i=0;i<N;i++){
    sum += parseInt(target.at(i));
}
console.log(sum);