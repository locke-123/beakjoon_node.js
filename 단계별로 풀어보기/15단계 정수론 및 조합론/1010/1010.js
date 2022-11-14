const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
let T = parseInt(input[0]);

let ans = '';
for(let i=1; i<=T; i++){
    let [N,M] = input[i].split(' ').map(Number);
    ans += combi(M,N) + '\n';
}
console.log(ans);

function combi(n,k){
    let matrix = new Array(n+1);
    for(let i=0; i<=n; i++){ //이차원 배열 생성
        matrix[i] = new Array(n+1).fill(null);
    }
    for(let i=1; i<=n; i++){ //기본 base case 값 할당
        matrix[i][i] = 1;
        matrix[i][1] = i;
    }
    for(let i=1; i<=n; i++){ //matrix 채우기 이번엔 bottom-up 방식
        for(let j=1; j<=k; j++){ //j<=k를 j<=i로 바꾸면 matrix 전체를 채운다.
            if(matrix[i][j] !== null){continue;}
            else {
                matrix[i][j] = matrix[i-1][j] + matrix[i-1][j-1];
            }
        }
    }
    return matrix[n][k]; //해당값 반환
}