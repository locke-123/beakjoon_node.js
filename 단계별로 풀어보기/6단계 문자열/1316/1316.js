const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().trim().split('\n'); //위아래 상관X
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => s.trim());

let N = parseInt(input[0]);
input.shift();
let ans = 0;

for(let i=0;i<N;i++){ //input에 대해서는 i in range 쓰지 않기
    if(groupWord(input[i]) === true) {
        ans++;
    }
}

console.log(ans);

function groupWord(str) {
    let charList = [];
        //let i in str (객체 index 반환)해도 가능
        //let i of str은 불가능(let 빼도 가능, 배열의 값을 가져오기 때문에 X)
    for(let i=0; i<str.length; i++){ //length 스펠링 틀려서 30분 삽질..
        if(charList.indexOf(str[i]) === -1){//list에 없으면 list에 넣기
            charList.push(str[i]);
        }
        else {//list에 있으면? 바로 전 i 가 같은지 확인
            if(str[i] !== str[i-1]){
                return false; //연속이 아니면 false 출력
            }
            //연속이면 계속 진행
        }
    }
    return true; //모두 통과시 그룹단어 인정
}