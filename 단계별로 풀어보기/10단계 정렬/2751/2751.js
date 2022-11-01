const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(Number);
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let N = input[0];
input.shift();

input.sort((a,b) => a-b); //원래는 알고리즘 써야하지만 아직은
//내장 객체를 이용해서 해결했다.

let ans = '';
for(i of input){
    ans += i+'\n'; //console.log로 인한 시간초과를 해결한다.
}
console.log(ans);