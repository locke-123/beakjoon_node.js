const fs = require('fs');
let input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
//let input = parseInt(fs.readFileSync('example.txt').toString().trim());

let ans = '';
for(let i = input; i>0; i--){
    ans += i+'\n';
}
console.log(ans);