const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => s.trim());
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => s.trim());

let T = parseInt(input[0]);

input.shift();//input 배열의 가장 앞부분 제거

for(let i=0;i<T;i++){
    let caseArray = input[i].split(' ').map(s => parseInt(s));
    console.log(caseArray[0]+caseArray[1]);
}