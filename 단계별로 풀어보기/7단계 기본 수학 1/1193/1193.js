const fs = require('fs');
//let input = parseInt(fs.readFileSync('example.txt').toString().trim());
let input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

let pos = 1;
let i = 0;
while(input >= pos){ //i는 차수, pos는 해당 차수의 시작 위치 1..2..4..7..11
    i++; //input이 pos보다 크면 차수 늘려가면서 input이 해당하는 차수 찾기
    pos += i;
}
pos -= i; //찾았으면 input보다 차수가 큰상태라 차수 1단계 낮추기;

let line = input - pos; //line의 숫자만큼 즉 input과 차이나는 숫자만큼 해당 차수에서 각 숫자를 더하고 뺌
let A = undefined; //분자
let B = undefined; //분모
if(i%2 === 1){ //해당 차수가 홀수인경우 ex)1/1..3/1...5/1...7/1..
    A = i;
    B = 1;
    A = A - line;
    B = B + line;
} else { //짝수인경우 ex)1/2...1/4...1/6..
    A = 1;
    B = i;
    A = A + line;
    B = B - line;
}

console.log(A+'/'+B);