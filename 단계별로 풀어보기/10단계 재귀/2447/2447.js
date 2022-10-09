const fs = require('fs');
let input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
//let input = parseInt(fs.readFileSync('example.txt').toString().trim());

// 이문제 다시 복습 & 분석
//console.log('answer ='+recursion(3,4,9)+';');

function recursion (i,j,n) {
    //console.log(i,j,n);
    if(i%3 === 1 && j%3 === 1) return ' ';
    else if(n === 1) return '*';
    else return recursion(Math.floor(i/3),Math.floor(j/3),n/3);
}


let ans = '';

for(let i=0; i<input; i++){
    for(let j=0; j<input; j++){
        ans += recursion(i,j,input);
    }
    ans += '\n';
}

console.log(ans);
