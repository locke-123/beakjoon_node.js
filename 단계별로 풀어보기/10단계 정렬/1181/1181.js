const { FORMERR } = require('dns');
const fs = require('fs');                          //.trim()은 필수적으로 여기에 넣기
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let N = parseInt(input[0]);
input.shift();
//알파벳 순서 정의
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//중복 제거 프로세스
let input2 = [];
for(let i in input){
    if(input2.includes(input[i])) continue;
    input2.push(input[i]);
}

//정렬 프로세스
input2.sort(function(a,b) {
    if(a.length !== b.length){ //길이가 다르다면
        return a.length - b.length; //길이에 따라서 정렬
    } else { //길이가 같다면
        let i = 0; //문자열 1번째부터
        while(i < 51){ //약 50개까지 (50이 맞지만 안전하게 51로 함)
            if(alphabet.indexOf(a[i]) !== alphabet.indexOf(b[i])){ //a와 b에 해당하는 index(ex: a = 0, b = 1 ...)
                return alphabet.indexOf(a[i]) - alphabet.indexOf(b[i]); //그 index에 따라 정렬
            }
            i++; //index가 똑같다면 i증가시켜 다음 문자열에서 탐색
        }
    }
});
for(i of input2){ //출력
    console.log(i);
}