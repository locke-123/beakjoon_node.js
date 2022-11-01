const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let N = parseInt(input[0]);
let M = parseInt(input[2]);
let myMap = new Map();
let S = input[1].split(' ').map(Number);

for(let i=0; i<N; i++){
    if(myMap.has(S[i])){ //map에 넣을때 만약 이미 key가 존재한다면
        myMap.set(S[i],myMap.get(S[i])+1); //동일한 key에 value를 +1해서 넣기
    } else {
        myMap.set(S[i],1); //아니면 value = 1
    }
}
//console.log(myMap);

let compare = input[3].split(' ').map(Number);
let ans = '';
for(let j=0; j<M; j++) {
    if(isNaN(myMap.get(compare[j]))){ //map안에 key에 해당하는 값이 undefined면 0을 출력
        ans += '0 ';
    } else {
        ans += myMap.get(compare[j]) + ' '; //아니면 그값 출력
    }
}
console.log(ans);

//정리해야할 집합은 N이고, 비교할것은 M, 비교횟수와 출력역시 M
//정리시 카운팅 소트로 할지?
//집합 key=숫자 value=갯수 이렇게 할지?