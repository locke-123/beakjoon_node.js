const fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(Number);
let N = input[0];
input.shift();

input = input.sort((a,b) => a-b);
console.log(input);
//1. 산술평균 : N개의 수들의 합을 N으로 나눈 값
let sum = 0;
for(i of input){
    sum += i;
}
console.log(Math.round(sum/N));

console.log(input[Math.floor(input.length/2)]);

//아무래도 카운팅 소트를 이용해야할듯, 절댓값 제일 큰수를 기준으로 배열을 2배해서
//max를 0으로 잡고 max가 4000이면 총 배열은 8000개, index 4000이 0을 뜻하고 4001이 1, 3999가 -1
//을 뜻하게 한다. 8000이 4000이 되는거고 0이 -4000이 되는 방식