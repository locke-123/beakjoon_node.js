const fs = require('fs');
let input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
//et input = parseInt(fs.readFileSync('example.txt').toString().trim());

console.log(fibo(input));

function fibo(n){
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fibo(n-1)+fibo(n-2);
}