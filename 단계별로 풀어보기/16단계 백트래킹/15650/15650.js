const fs = require('fs');
//let [N,M] = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number);
let [N,M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
//console.log(N,M);

let visited = new Array(N);
let res = [];
let ans = '';
bt();
console.log(ans);

function bt(){
    if(res.length === M){
        ans += res.join(' ')+'\n'; return;
    }
    for(let i=0; i<N; i++){
        if(visited[i] === true) continue;
        if(res[res.length-1] > i+1) continue;
        visited[i] = true;
        res.push(i+1);
        bt();
        res.pop();
        visited[i] = false;
    }
}