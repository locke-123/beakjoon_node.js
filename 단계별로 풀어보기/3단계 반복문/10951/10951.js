const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => s.trim());
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => s.trim());

//숫자가 아닌 경우 ' '와 같은 case도 포함할 수 있음.
let N = input.length;
let sum = 0;
let tCase = [];
for(let i=0; i<N; i++){
    tCase = input[i].split(' ').map(s => parseInt(s));
    sum = tCase[0]+tCase[1];
    if(isNaN(sum) === true){ //숫자가 아닌경우 Nan 일시 break
        break;
    }
    console.log(sum);
}
