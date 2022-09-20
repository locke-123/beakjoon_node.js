const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => s.trim());
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => s.trim());

let N = input.length;

let tCase = [];
for(let i=0; i<N; i++){
    tCase = input[i].split(' ').map(s => parseInt(s));
    if(tCase[0]+tCase[1] === 0){
        break;
    }
    console.log(tCase[0]+tCase[1]);
}