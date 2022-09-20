const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => s.trim());

let n = parseInt(input[0]);
input.shift();
let bonus = 0;
let score = 0;

for(let i=0;i<n;i++) {//for i in input 해도 가능
    //새로운 테스트 케이스
    bonus = 0;
    score = 0; //보너스 & 스코어 초기화
    for(let j=0;j<input[i].length;j++){ //해당 문자열
        if(input[i].charAt(j) === 'O'){
            score += (1+bonus);
            bonus++;
        } else {
            bonus = 0;
        }
    }
    console.log(score); //각 case 마다 출력
}