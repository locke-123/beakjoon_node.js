//fs 모듈 사용시 런타임 에러

//readline 모듈
const readline = require('readline'); //readline 모듈 사용
const rl = readline.createInterface({ //interface 생성
    input: process.stdin,
    output: process.stdout
  });

let input = [];
let num = 0;

rl.on('line', function (line) { //line 마다 체크
    num++;
    input.push(parseInt(line)) //input에 line별로 push
    if(num === 2) rl.close();
})
.on('close', function () { //입력 완료시
    let x = input[0];
    let y = input[1];
    let result;
    
    if(x > 0 && y > 0) result = 1;
    else if(x > 0 && y < 0) result = 4;
    else if (x < 0 && y > 0) result = 2;
    else result = 3;
    
    console.log(result);
    process.exit();
});

// fs 모듈 사용시
/*const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => s.trim());
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => s.trim());
input = input.map(s => parseInt(s));

let x = input[0];
let y = input[1];
let result;

if(x > 0 && y > 0) result = 1;
else if(x > 0 && y < 0) result = 4;
else if (x < 0 && y > 0) result = 2;
else result = 3;

console.log(result);
*/