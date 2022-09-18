const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ')
.map(s => parseInt(s)); //map 각 배열요소마다 적용, => 함수
//let input = fs.readFileSync('example.txt').toString().split(' ').map(s => parseInt(s));

let normal = [1, 1, 2, 2, 2, 8];
let val = []

for (i in input){
    val[i] = normal[i]-input[i];
}

let str = val.join(" "); //join을 통해 배열 -> 문자열 가능
console.log(str);