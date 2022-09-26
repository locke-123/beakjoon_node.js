const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => s.trim());
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => s.trim());

let M = parseInt(input[0]);
let N = parseInt(input[1]);
let sum = 0;
let min = 0;
for(let i=M;i<=N;i++){
    if(primeFinder(i) === true){ //소수이면
        if(sum === 0){ //만약 처음이면 min에 추가
            min = i;
        } //그리고 sum에 더하기
        sum += i;
    }
}
if(sum === 0){
    console.log(-1);
} else{
    console.log(sum);
    console.log(min);
}

function primeFinder(num){ //true = prime number
    let flag = true;
    if(num <= 1) { //num이 1이거나 1보다 작으면 소수 아님
        flag = false;
        return flag;
    }
    for(let i=2;i<=num;i++){ //2부터 시작해서 자신까지 나누기를 시도
        if(num === i){ //나눠지는게 자기 자신이면 Pass
            continue;
        }
        if(num%i === 0){ //1과 자기자신 빼고 정확히 나눠진다면 소수 아님
            flag = false;
            break;
        }
    }
    return flag;
}
