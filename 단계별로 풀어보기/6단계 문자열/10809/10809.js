const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString();
let input = fs.readFileSync('/dev/stdin').toString();

let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
'p','q','r','s','t','u','v','w','x','y','z'];
let ans = new Array(26).fill(-1); //-1로 채워진 26길이의 배열

for(let i=0; i<input.length; i++){ //입력의 문자열 탐색
    for(let j=0; j<alphabet.length; j++){ //입력의 문자와 해당 알파벳 일치 확인
        if(input[i] === alphabet[j]){
            if(ans[j] === -1){ //-1이라면 변경
                ans[j] = i;
            }
        }
    }
}
let result = '';
for(i in ans){
    result += (ans[i]+' ');
}
console.log(result);