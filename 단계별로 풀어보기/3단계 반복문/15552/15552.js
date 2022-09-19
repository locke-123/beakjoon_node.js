const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => s.trim());
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => s.trim());

//변수 미리 할당
let result = ''; 
let tArray;
let num = parseInt(input[0]);
input.shift();
for(let i=0; i<num; i++){
    tArray = input[i].split(' ').map(s => parseInt(s));
    result += tArray[0]+tArray[1]+'\n';
}
console.log(result); //console.log는 시간을 꽤나 잡아먹는다.

//시간 1468ms