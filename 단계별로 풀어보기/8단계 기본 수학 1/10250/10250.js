const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => s.trim());
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => s.trim());

let T = parseInt(input[0]);
input.shift();

for(let i=0;i<T;i++){
    let [H,W,N] = input[i].split(' ').map(s => parseInt(s)); //W 안씀

    let X = Math.floor(N/H)+1; //호실은 각 층만큼 나누고 소수 버리고 거기에 +1 한 값
    let Y = N%H; //층수는 고객순서%층수를 하고 난 나머지
    if(Y === 0) Y = H; //예외) 나머지가 없다면 Y는 층수이다.
    if((N/H)%1 === 0) X--;//예외2) 호실이 소수점이 아니라 정수라면 -1 해준다.

    if(X < 10){
        console.log(Y+'0'+X);
    } else {
        console.log('%d%d',Y,X);
    }
}