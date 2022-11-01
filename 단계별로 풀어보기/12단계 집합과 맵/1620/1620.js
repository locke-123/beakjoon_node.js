const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let [N,M] = input[0].split(' ').map(Number);
input.shift();

let myMap = new Map(); //MAP은 key와 value를 가지는 집합
for(let i=0; i<N; i++){
    myMap.set(input[i],i+1); //각 원소에 key=포켓몬이름 value=번호(index)
}

let ans = '';
for(let j=N; j<input.length; j++){
    if(isNaN(input[j])){ //숫자가 아닐경우
        ans += myMap.get(input[j]) + '\n'; //map에서 해당포켓몬에 대한 번호 출력
    } else {
        ans += input[input[j]-1] + '\n'; //숫자면 그냥 j-1해서 포켓몬 이름 출력
    }
}
console.log(ans);