const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(Number);
let N = input[0];
input.shift();

input.sort((a,b) => a-b); //오름차순 sort 내장 객체

for(i of input){
    console.log(i);
}