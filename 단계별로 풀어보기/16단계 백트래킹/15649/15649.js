const fs = require('fs');
let [N,M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
//let [N,M] = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number);
//console.log(N,M)
//1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열 길이=M
//당분간 자료구조-DFS..등-백트래킹까지 공부후 진행

let visited = [];
let res = [];
let ans = '';
bt(0);
function bt(index){
    if(res.length === M){
        ans += res.join(' ')+'\n';
    } else {
        for(let i=0; i<N; i++){
            if(visited[i] === true) continue;
            visited[i] = true;
            res.push(i+1);
            bt(i+1);
            res.pop();
            visited[i] = false;
        }
    }
}
console.log(ans);