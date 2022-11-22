const fs = require('fs');
let [N,M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
//let [N,M] = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number);
//console.log(N,M);

let res = [];
let ans = '';

function bt(){
    let len = res.length;
    if(len === M){ //유망 체크1 M의 길이에 도달했는지 확인 후 출력한다음 back
        ans += res.join(' ')+'\n'; return;
    }
    for(let i=1; i<=N; i++){
        if(res[len-1] > i){continue;} //유망 체크2 비내림차순인지 확인
        res.push(i);
        bt();
        res.pop();
    }
}

bt();
console.log(ans);