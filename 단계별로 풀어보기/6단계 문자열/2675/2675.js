const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => s.trim());
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => s.trim());

let T = parseInt(input[0]);
input.shift();

let testCase = [];
let R = undefined;
let ans;
for(i in input){
    ans = '';
    testCase = input[i].split(' ');
    R = parseInt(testCase[0]); //반복횟수
    for(j in testCase[1]){ //ans에 해당 케이스의 문자에 R곱한만큼 ans에 넣기
        ans += testCase[1][j].repeat(R);
    }
    console.log(ans);
}