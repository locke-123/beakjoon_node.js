const fs = require('fs');
let n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
//let n = parseInt(fs.readFileSync('example.txt').toString().trim());
//console.log(n);

let count1 = 0;
function fib(n){ //재귀 호출 방식
    if(n === 1 || n === 2){
        count1++;
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

let count2 = 0;
function fibonacci(n){ //동적 계획법 방식
    let f = []; f[0] = null;
    f[1] = 1; f[2] = 1;
    for(let i=3; i<=n; i++){
        count2++;
        f[i] = f[i-1] + f[i-2];
    }
    return f[n];
}

fib(n);
fibonacci(n);
console.log(count1,count2);