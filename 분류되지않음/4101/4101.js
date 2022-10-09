const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());

for(let i=0; i<input.length; i++){
    let T = input[i].split(' ').map(s => parseInt(s));
    if(T[0] === 0 && T[1] === 0) break;
    if(T[0] > T[1]) console.log('Yes');
    else console.log('No');
}