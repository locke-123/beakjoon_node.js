const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => s.trim()).map(s => parseInt(s));
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => s.trim()).map(s => parseInt(s));

let position = 1;
let max = input[0];
for(let i=1;i<9;i++){
    if(input[i] > max){
        max = input[i];
        position = i+1;
    }
}
console.log(max);
console.log(position);