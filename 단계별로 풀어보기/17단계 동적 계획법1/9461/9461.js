//피보나치 수와 비슷한 규칙을 찾아 동적 계획법으로 푸는 문제
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => parseInt(s.trim()));
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => parseInt(s.trim()));
let T = parseInt(input[0]);
let max = Math.max(...input);
let memo = new Array(max);
if(max > 3){
    //base case
    memo[0] = 1;
    memo[1] = 1;
    memo[2] = 1;
    //dp
    for(let i=3; i<max; i++){
        memo[i] = memo[i-2] + memo[i-3];
    }
} else { //최대 N이 3보다 작으면 dp가 필요없음
    for(let i=0; i<max; i++){
        memo[i] = 1;
    }
}
let ans = '';
for(let i=1; i<=T; i++){
    ans += memo[input[i]-1]+'\n';
}
console.log(ans);

/*
1 1 1 2 2 3 4 5 7 9
f(n) = f(n-2) + f(n-3)
*/