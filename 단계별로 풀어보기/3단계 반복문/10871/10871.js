const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => s.trim());
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => s.trim());

let [N, X] = input[0].split(' ').map(s => parseInt(s));
input.shift();
input = input[0].split(' ').map(s => parseInt(s));

let result ='';
for(let i=0; i<N; i++){
    if(input[i] < X){
        result += input[i]+' '
    }
}
console.log(result);