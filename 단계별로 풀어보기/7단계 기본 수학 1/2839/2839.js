const fs = require('fs');
//let input = parseInt(fs.readFileSync('example.txt').toString().trim());
let input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
let ans = -1;

for(let i=Math.floor(input/5);i>=0;i--){ //input을 5로 나눌수 있는 최대한 부터 시작
    if((input-5*i)%3 === 0){ //5짜리 봉지를 줄이다가 5짜리 봉지를 제외한 나머지가 3짜리 봉지에 딱 맞으면
        ans = (i+(input-5*i)/3); //5짜리 봉지 + 3짜리 봉지
        break;
    }
}
console.log(ans);