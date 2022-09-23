const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number);
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let A = input[0]; //고정비용
let B = input[1]; //노트북 한대 생산하는데 드는 가변비용
let C = input[2]; //노트북 판매 가격

//총 수입 = 판매 비용
//총 비용 = 고정비용 + 가변비용

//A+B < C 가 되는 기점
//C가 아무리 해도 A+B가 안되는 경우
// i) B >= C
//바로 손익 분기점이 나오는 경우(이미 A+B < C인 경우)
// i) A=0이면..B=0 C=1
/*
let i = 0;
while(true){
    if(B >= C){i = -1; break;}
    i++;
    //console.log('i = '+i,'A+B = '+(A+(i*B)),'C = '+(C*i),'flag =',Boolean((A+(i*B)) < (C*i)));
    if((A+(i*B)) < (C*i)){ //오버플로우??? //C가 21억이고 i가 21억이면 4000만조? 가 넘어가서 오버플로발생
        break;
    }
}
*/
//console.log(i);

if(B > C) console.log(-1);
if(B < C) {
  let temp = A+B;
      temp2 = C;
      i = 1;

  while(temp > temp2) {
    temp += B;
    temp2 += C; 
    i ++;
  }
  console.log(i+1);
}
//이건 시간초과