const fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let N = parseInt(input[0]);
input.shift();
console.log(input,N);

//ex 2 4 -10 4 -9

//input안에 각각의 숫자들 가져오기 중복은 X
//ex 2 4 -10 -9


//각 숫자들마다 가장 작은 값 부터 0을 매기고 1씩 키우기
//ex 2 = 2   4 = 3  -10 = 0  -9 = 1

//각각 맵핑된 수들을 기존의 배열에 replace 하기
//ex 2 3 0 3 1

//출력