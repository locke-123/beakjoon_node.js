const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
//let input = fs.readFileSync('example.txt').toString().trim();

let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
'P','Q','R','S','T','U','V','W','X','Y','Z'];
let count = new Array(26).fill(0);

for(let i=0;i<input.length;i++){
    for(let j=0;j<26;j++){
        if(input[i].toUpperCase() === alphabet[j]){ //대문자로 만들어서 비교
            count[j]++; //하나 나올때마다 해당 위치의 count ++
        }
    }
}

let max = 0;
let index = undefined; //알바벳 위치
let overLap = 0; //중첩횟수
for(let i=0;i<26;i++){
    if(count[i] === 0) continue; //한번도 안나온경우(0) 패스
    if(count[i] > max) { //max보다 크면 중첩 초기화+max,index 할당
        overLap = 0;
        max = count[i];
        index = i;
    } else if(count[i] === max) {
        overLap++; //max값과 같다면 중첩 ++
    }
}

if(overLap > 0){ //중첩이 있으면 ? 출력
    console.log('?');
} else { //아니면 해당 알파벳 index 출력
    console.log(alphabet[index]);
}