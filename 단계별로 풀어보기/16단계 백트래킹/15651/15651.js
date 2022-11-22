const fs = require('fs');
let [N,M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
//let [N,M] = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number);
//console.log(N,M);

let res = [];
let ans = '';
function bt(){
    if(res.length === M){ //유망 조건 => res 즉 수열의 길이가 M에 도달했는가?
        ans += res.join(' ')+'\n'; return;
    }
    for(let i=1; i<=N; i++){
        res.push(i); //수 넣고
        bt(); //그 하위단계 leaf 통과
        res.pop(); //다시 back
    }
}
bt();
console.log(ans);