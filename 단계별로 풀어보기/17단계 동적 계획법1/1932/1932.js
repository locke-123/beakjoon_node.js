const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s=>s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s=>s.trim());
//console.log(input);
let N = parseInt(input[0]);
let memo = [];

if(N === 1){
  memo[1] = parseInt(input[1]);
  console.log(memo[1]);
} else if(N===2){
  memo[1] = parseInt(input[1]);
  memo[2] = input[2].split(' ').map(s => parseInt(s)+memo[1]);
  console.log(Math.max(...memo[N]));
} else {
  memo[1] = parseInt(input[1]);
  memo[2] = input[2].split(' ').map(s => parseInt(s)+memo[1]);
  for(let i=3; i<input.length; i++){ //i는 단계를 나타냄
      let arr  = input[i].split(' ').map(Number);
      memo[i] = [];
      for(let j=0; j<i; j++){ //j는 각 단계 index
        if(j===0){
          memo[i].push(memo[i-1][0] + arr[j]); //왼쪽 모서리는 이전단계 첫번째와 현 첫 index 합
        } else if (j === i-1) {
          memo[i].push(memo[i-1][j-1] + arr[j]); //마지막 모서리는 이전 마지막 index와 현 마지막 index
        } else {
          memo[i].push(Math.max(memo[i-1][j-1] + arr[j],memo[i-1][j] + arr[j])); //중간 2가지 선택지의 경우 이전의 왼쪽과 현재 index합중 최대가 max
        }
      }
  }
  console.log(Math.max(...memo[N]));
}
/*
5
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5

30

          7
        10  15
    18    16  15
  20   25    20   19
24   30   27    26   24
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
