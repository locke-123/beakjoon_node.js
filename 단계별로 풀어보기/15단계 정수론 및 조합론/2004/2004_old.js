const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
//let input = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number);
let [n,k] = input;

/* DP는 불가능한듯
function bC(n,k){//이항계수 DP 제작 (이때 20억은 그냥 넘어가므로 BigInt 사용)
    let dp = [];
    for(let i=0; i<=n; i++){
        dp.push(new Array(n+1).fill(null))
    }
    dp[0][0] = BigInt(0);
    for(let i=1; i<=n; i++){
        dp[0][i] = BigInt(i); //n이 0인 경우는 X k에대한 값 표시용(장식)
        dp[i][0] = BigInt(1); //5C0 은 무조건 1, => k=0 이면 무조건 1
        dp[i][1] = BigInt(i); //4C1은 4 즉 k=1이면 n이다.
        dp[i][i] = BigInt(1); //3C3은 1 즉 n=k이면 1이다.
    }
    for(let i=0; i<=n; i++){
        for(let j=0; j<=k; j++){
            if(dp[i][j] !== null || i < j){
                continue;
            } else {
                dp[i][j] = dp[i-1][j] + dp[i-1][j-1];
            }
        }
    }
    //console.log(dp);
    return String(dp[n][k]);//계산된 이항계수 숫자를 문자열로 변환
}
//문자열의 뒤부터 count
//console.log(n,k);
let bCValue = bC(n,k);
//console.log(bCValue);

let lastIndex = bCValue.length-1;
let count = 0;
while(lastIndex >= 0){
    if(bCValue[lastIndex] !== '0'){
        break;
    } else {
        lastIndex--;
        count++;
    }
}
console.log(count);
*/