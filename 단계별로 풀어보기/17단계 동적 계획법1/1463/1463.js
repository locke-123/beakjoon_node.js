const fs = require('fs');
let x = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
//let x = 10;

let memo = [];
memo[1] = 0;
memo[2] = 1;
memo[3] = 1;

for(let i=4; i<=x; i++){
    let isNotDiv3 = i%3; //i%3이 나머지가 있다면 isNotDiv3즉 3으로 나눠지지 않음 isnotdiv3 true
    let isNotDiv2 = i%2; //i%2가 나머지가 없다면 i%2 = 0 즉 나눌수 있음으로 isnotdiv2 false
    if(isNotDiv2 && isNotDiv3){
        memo[i] = memo[i-1]+1;
    } else if (isNotDiv2){
        memo[i] = Math.min(memo[i-1],memo[i/3])+1;
    } else if (isNotDiv3){
        memo[i] = Math.min(memo[i-1],memo[i/2])+1;
    } else {
        memo[i] = Math.min(memo[i-1],memo[i/2],memo[i/3])+1;
    }
}
console.log(memo[x]);
/*
fx = 최소연산 횟수
x%3 === 0 => x/3
x%2 === 0 => x/2
else x = x-1

1 => 1
2 => 2/2 => 1
3 => 3/3 => 1
4 => 4/2 => 2 => 2/2 => 1
5 => 5-1 => 4 => 4/2 => 2 => 2/2 => 1
6 => 6/3 => 2 => 2/2 => 1
7 => 7-1 => 6 => 6/3 => 2 => 2/2 => 1
8 => 8/2 => 4 => 4/2 => 2 => 2/2 => 1
9 => 9/3 => 3 => 3/3 => 1
10 => 10/2 => 5 => 5-1 => 4 => 4/2 => 2 => 2/2 => 1
10 => 10-1 => 9 => 9/3 => 3 => 3/3 => 1

memo[1~10] = 0 1 1 2 3 2 3 3 2 3
memo[5] = min (memo[4]) + 1;
memo[6] = min (memo[5], memo[6/3], memo[6/2]);   =>  min(3,1,1) +1;

fx = min(f(x-1), f(x/3), f(x/2))
*/