const fs = require('fs');
let input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
//let input = parseInt(fs.readFileSync('example.txt').toString().trim());

let n = input;
let c = 0; //input의 자릿수
while(n >= 1){ //input의 자릿수 탐색
    c++;
    n = Math.floor(n/10);
}

let ans = 0;

for(let i=input-1;i>=input-(c*9);i--){ //i는 input-1부터 input에서 각 자릿수의*9 만큼 감소하며 탐색한다.
    if(i+indivNumsSum(i) === input){//input이 3자리수일때 최대로 나올 수 있는 값이 999, 9+9+9=27이고, 아무리 줄어든다 한들
        ans = i;                    //27이상으로 내려가면 절대로 i+27(각자릿수합 최대값) = input이 나올 수 없기 때문.
    } //여기서 만약 분해합을 만족하면 ans를 i로 갱신한다. (어차피 줄어드는 방향이기 때문에 i가 무조건 작다);
}
console.log(ans);

function indivNumsSum(num) { //num의 각 자릿수의 합을 반환한다.
    let sum = 0;
    while(num >= 1){
        sum += Math.floor(num%10);
        num = Math.floor(num/10);
    }
    return sum;
}