const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
//let input = fs.readFileSync('example.txt').toString();

let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
'P','Q','R','S','T','U','V','W','X','Y','Z'];
let pos = -1;
let t = 0;
let ans = 0;

for(let i=0; i<input.length; i++){
    t = 0;
    pos = -1;
    for(let j=0;j<alphabet.length;j++){
        if(input[i] === alphabet[j]){
            pos = j; //알파벳의 위치 찾기
            break;
        }
    }
    if(pos === -1) continue; //공백이나 이상한 값 제거용(일치하는 알파벳 못찾음)

    switch(pos){ //위치에 따라 t 값을 변경
        case 0: case 1: case 2:
            t = 3; break;
        case 3: case 4: case 5:
            t = 4; break;
        case 6: case 7: case 8:
            t = 5; break;
        case 9: case 10: case 11:
            t = 6; break;
        case 12: case 13: case 14:
            t = 7; break;
        case 15: case 16: case 17: case 18:
            t = 8; break;
        case 19: case 20: case 21:
            t = 9; break;
        case 22: case 23: case 24: case 25:
            t = 10; break;
    }
    ans += t; //t를 모두 더함
}

console.log(ans);