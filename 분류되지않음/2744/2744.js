const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
//let input = fs.readFileSync('example.txt').toString().trim();

let ans = '';
for(i in input){
    if(input[i] === input[i].toUpperCase()) {
        ans += input[i].toLowerCase();
    } else {
        ans += input[i].toUpperCase();
    }
}
console.log(ans);