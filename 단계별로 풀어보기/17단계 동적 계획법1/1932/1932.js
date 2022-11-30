const fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s=>s.trim());
console.log(input);
let N = parseInt(input[0]);
let memo = [];
memo[1] = parseInt(input[1]);
memo[2] = [10,15]
for(let i=3; i<input.length; i++){
    let arr  = input[i].split(' ').map(Number);
    for(let j=0; j<memo[i-1].length; j++){
        memo[i] = [];
        memo[i].push(memo[i-1][j] + arr[j]);
        memo[i].push(memo[i-1][j] + arr[j+1]);
    }
}
console.log(memo);
/*
5
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5

30
*/


/*
        7
      3   8
    8   1   0
  2   7   4   4
4   5   2   6   5

위 그림은 크기가 5인 정수 삼각형의 한 모습이다.

맨 위층 7부터 시작해서 아래에 있는 수 중 하나를 
선택하여 아래층으로 내려올 때, 이제까지 선택된 수의 
합이 최대가 되는 경로를 구하는 프로그램을 작성하라. 
아래층에 있는 수는 현재 층에서 선택된 수의 대각선 
왼쪽 또는 대각선 오른쪽에 있는 것 중에서만 선택할 수 있다.

삼각형의 크기는 1 이상 500 이하이다. 삼각형을 
이루고 있는 각 수는 모두 정수이며, 범위는 0 이상 9999 이하이다.
*/

/*
7
10 15
18 11 16 15
*/
