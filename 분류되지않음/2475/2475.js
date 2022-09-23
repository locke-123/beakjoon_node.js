const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().trim().split(' ').map(s => parseInt(s));
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(s => parseInt(s));

input = input.map(i => i*i);
let ans = 0;
for(let i of input){
    ans += i;
}
console.log(ans%10);