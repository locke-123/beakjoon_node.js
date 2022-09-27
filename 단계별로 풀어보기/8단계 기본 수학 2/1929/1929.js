const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().trim().split(' ').map(s => parseInt(s));
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(s => parseInt(s));
let M = input[0];
let N = input[1];

let primeArray = new Set();
//에라토스테네스의 체 라는 알고리즘을 활용해야한다.
for(let i=2;i<=N;i++){
    primeArray.add(i);
}

for(let i=2;i<=Math.sqrt(N);i++){
    for(let j=i+i;j<N;j+=i){
        primeArray.delete(j);
    }
}

let ans = [];
for(let i of primeArray){
    if(M<=i && i<=N){
        ans.push(i);
    }
}
console.log(ans.join('\n'));