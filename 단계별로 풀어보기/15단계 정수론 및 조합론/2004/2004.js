const fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number);
let [n,k] = input;
console.log(n,k);

//이항계수 DP 제작 (이때 20억은 그냥 넘어가므로 BigInt 사용)
//계산된 이항계수 숫자를 문자열로 변환
//문자열의 뒤부터 count