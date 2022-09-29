/*
*
10989는 NODE.js로 풀 수 없다. (메모리 초과)
*
*/
const fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(Number);
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let N = input[0];
input.shift();

//카운팅 정렬을 사용하기

//입력 받은 수 중 최대값 구하기
let max = 0;
for(i of input){
    if(i > max){
        max = i;
    }
}
//const max = Math.max(...input); //max를 구하는 또다른 방법

//최대값+1  만큼의 배열을 만들고 각 수에 맞는 배열의 index를 카운트
let count = new Array(max+1).fill(0);
for(i of input){
    count[i]++;
}
//count array의 count 횟수를 누적합으로 변경
for(let i=1; i<=max;i++){
    count[i] += count[i-1];
}

let result = new Array(N);
//input의 i에 해당하는 count에 저장된 index값을 가져와 -1 하고 result의 index에 i 넣기
for(i of input){
    result[count[i]-1] = i;
    count[i]--; //그리고 해당하는 누적합 배열은 -1
}

console.log(result.join('\n'));