const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
//let input = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number);
let [n,k] = input;
k = Math.min(k,n-k); // 10C3과  10C7은 같다. 그러므로 k가 더 작은값을 선택하는게 이득

/*
function combi(n,k){ //시간초과
    if(n === k) return 1;
    if(k === 1) return n;
    if(k === 0) return 1;
    return combi(n-1, k) + combi(n-1,k-1);
}
*/

let combiMatrix = Array.from(Array(n+1), () => Array(n+1));//행과 열이 0인 값은 안씀

function combi2(n,k){ //여기는 DP를 사용해서 문제를 해결했다. top-down 방식(숫자가 더 커질경우 stack 오버플로 문제 요망)
    k = Math.min(k,n-k); //여기서 한번더 작은거 찾기
    let res = undefined;
    if(combiMatrix[n][k] !== undefined) { //만약 memo에 있으면 바로 반환
        return combiMatrix[n][k];
    }
    if(n === k || k === 0){res = 1} //base case 1
    else if(k === 1) {res = n;} //base base 2
    //이외에는 C(n,k) = C(n-1,k) + C(n-1,k-1)과 같다.
    else {res = (combi2(n-1, k) + combi2(n-1,k-1))%10007;} //수가 겁나 커져서 오버플로우 문제로 인해 여기서 10007을 나눈다.
    combiMatrix[n][k] = res; //결과를 memo에 저장
    return res; //반환
}
console.log(combi2(n,k));

/*     ---참고---
(6,2) = (5,2) + (5,1)
        (5,2) = (4,2) + (4,1)
                (4,2) = (3,2) + (3,1)
15    =   10  +   5
          10    =    6   +     4         5    =    4   +   1
                  6    =    3    +    3
*아래는 n이 6까지인 피보나치 수열에 대한 표를 나타냄*
n\k    1    2   3   4   5   6
1      1    -   -   -   -   -
2      2    1
3      3    3   1
4      4    6   4   1
5      5    10      5   1 
6      6    15          6   1
*/