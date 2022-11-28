const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s=>s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s=>s.trim());
let n = input[0];
let arr = input[1].split(' ').map(Number);
let memo = new Array(arr.length);
memo[0] = arr[0]; //memo는 이전까지의 합 or 현재숫자 중 max를 저장해놓은 배열
let max = memo[0];

for(let i=1; i<arr.length; i++){
    memo[i] = Math.max(memo[i-1]+arr[i], arr[i]);
    max = Math.max(memo[i],max);
}
console.log(max);
/*10, -4, 3, 1, 5, 6, -35, 12, 21, -1
10          10
-4   6      6
3    9      9
1    10     10
5    15     15
6    21     21
-35  -14    -14
12   -2     12
21   33     33
-1   32     32
*/