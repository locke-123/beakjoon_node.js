const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => s.trim());
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => s.trim());

let sum = parseInt(input[0]);
let calSum = 0;
input.shift();

let num = parseInt(input[0]);
input.shift();

for(let i=0;i<num;i++){
    let buyList = input[i].split(' ').map(s => parseInt(s));
    calSum += buyList[0]*buyList[1];
}

if(sum === calSum){
    console.log('Yes');
} else {
    console.log('No');
}