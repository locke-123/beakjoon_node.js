const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s=>s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s=>s.trim());

//2차원 배열을 사용함

let [N,M] = input[0].split(' ').map(Number);
let A = [];
for(let i=1; i<N+1; i++){ //A행렬 넣기
    A[i-1] = input[i].split(' ').map(Number);
}
//console.log(A);
let B = [];
for(let i=N+1; i<input.length; i++){ //B행렬 넣기
    B[i-(N+1)] = input[i].split(' ').map(Number);
}
//console.log(B);

let ans = '';
for(let i=0; i<N; i++){
    for(let j=0; j<M; j++){
        ans += (A[i][j] + B[i][j]) + ' '; //각 행렬 더하기
    } //2차원 배열
    ans += '\n';
}
console.log(ans);