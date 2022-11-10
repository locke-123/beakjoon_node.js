const fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let input = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number);
let [n,k] = input;
k = Math.min(k,n-k); // 10C3과  10C7은 같다. 그러므로 k가 더 작은값을 선택하는게 이득
//다이나믹 프로그래밍 공부 요망
let count = 0;
function combi(n,k){ //아마 시간초과
    count++;
    if(n === k) return 1;
    if(k === 0) return 1;
    return combi(n-1, k) + combi(n-1,k-1);
}
let start = new Date();
console.log(combi(1000,3));
let end = new Date();
console.log(end-start);
console.log(count);