const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(s => parseInt(s));
//let input = fs.readFileSync('example.txt').toString().trim().split(' ').map(s => parseInt(s));

let [A,B,V] = input;

let ans = Math.ceil(V/(A-B) - A/(A-B))+1; //그냥 수학적으로 방정식 풀면 이와 같음
//ceil은 소수로 나오는 것 방지용 하루로 치기 때문에 무조건 올림
if(ans <= 0) ans = 1; //혹여나 A = V 이거나 할때 하루만에 올라갈 수 있음
console.log(ans);