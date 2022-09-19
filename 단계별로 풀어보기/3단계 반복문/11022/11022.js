const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => s.trim());
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => s.trim());

let testCase;
let t = parseInt(input[0]);
input.shift();

for(let i=0;i<t;i++){
    testCase = input[i].split(' ').map(s => parseInt(s));
    console.log("Case #"+(i+1)+": "+testCase[0]+" + "+testCase[1]+" = "+(testCase[0]+testCase[1]));
}