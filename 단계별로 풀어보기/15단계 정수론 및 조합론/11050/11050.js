const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
//let input = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number);
let [n,k] = input;
k = Math.min(k,n-k); // 10C3과  10C7은 같다. 그러므로 k가 더 작은값을 선택하는게 이득
let up = 1;
for(let i=n; i>n-k; i--){ //각각 해당하는 수만큼 factorial
    up*= i;
}
//console.log(up);
let down = 1;
for(let i=k; i>0; i--){ //여기는 끝까지 factorial
    down*= i;
}
//console.log(down);

console.log(up/down); //둘이 나누기