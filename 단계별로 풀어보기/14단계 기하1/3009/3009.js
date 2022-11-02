const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
input = input.map(s => s.split(' ').map(Number));
console.log(find(input[0][0],input[1][0],input[2][0]),find(input[0][1],input[1][1],input[2][1]));
//x중에 안나온 1개가 정답이고 y도 짝이 안맞는 1개가 정답이다.
function find(a,b,c){
    if(a === b){
        return c;
    } else if (b === c) {
        return a;
    } else {
        return b;
    }
}