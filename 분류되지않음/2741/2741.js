const fs = require('fs');
let input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
//let input = parseInt(fs.readFileSync('example.txt').toString().trim());
let ans = '';
for(let i=1;i<=input;i++){
    ans += i+'\n';
}
console.log(ans);