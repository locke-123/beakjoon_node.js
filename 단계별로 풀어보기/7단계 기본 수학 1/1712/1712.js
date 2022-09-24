const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number);
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let A = input[0]; //고정비용
let B = input[1]; //노트북 한대 생산하는데 드는 가변비용
let C = input[2]; //노트북 판매 가격

//while 문을 쓰면 시간초과(B += B 와 같은 형식), 틀렸습니다(C = C*i 의 형식)이 뜬다.
if(B >= C){
  console.log(-1);
} else {
  console.log(Math.floor(A/(C-B))+1); //방정식 풀면 i >= A/(C-B)가 나온다.
}