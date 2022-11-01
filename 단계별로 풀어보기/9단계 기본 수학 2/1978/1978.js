const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => s.trim());
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => s.trim());

let N = parseInt(input[0]);
input.shift();

let list = input[0].split(' ').map(s => parseInt(s));
let count = 0;

for(let i=0; i<N; i++){
    if(primeFinder(list[i]) === true){ //prime finder에 true면 count +1
        count++;
    }
}
console.log(count);

function primeFinder(num){ //true = prime number
    let flag = true;
    if(num <= 1) { //num이 1이거나 1보다 작으면 소수 아님
        flag = false;
        return flag;
    }
    for(let i=2;i<=1000;i++){ //2부터 시작해서 1000까지 나누기를 시도
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
