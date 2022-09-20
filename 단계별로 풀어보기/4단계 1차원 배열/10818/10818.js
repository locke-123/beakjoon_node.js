const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => s.trim());
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => s.trim());

let N = parseInt(input[0]);

input = input[1].split(' ').map(s => parseInt(s)); //parseInt 안하면 비교 이상함

let max, min;
for(let i=0;i<N;i++){
    if(i === 0){
        max = input[0];
        min = input[0];
        continue;
    }
    if(input[i] > max){
        max = input[i];
    }
    if(input[i] < min){
        min = input[i];
    }
}
console.log(min, max);