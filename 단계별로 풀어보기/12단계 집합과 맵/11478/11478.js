const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
//let input = fs.readFileSync('example.txt').toString().trim();

let ansSet = new Set();
count(input.length);
//substr
console.log(ansSet.size); //중복 자동제거됨

function count(num) {
    if(num <= 0) return;
    for(let i=0; i<=input.length-num; i++){ //크게 문자열 자체부터 천천히 1개씩 줄이면서 나아감
        ansSet.add(input.substring(i,num+i));
    }
    count(num-1); //재귀
} //총 f(n) = n + f(n-1)  로 작동함
/*
0 0~4                1
1 01, 12, 23, 34;    2
2 012, 123, 234;     3
3 0123, 1234;        4
4 012345;            5
*/