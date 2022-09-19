const fs = require('fs');
//let input = parseInt(fs.readFileSync('example.txt').toString());
let input = parseInt(fs.readFileSync('/dev/stdin').toString());

for(let i=1;i<=input;i++){
    console.log(' '.repeat(input-i)+'*'.repeat(i));
}