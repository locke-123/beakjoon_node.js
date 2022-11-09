//N개의 수를 M으로 나누었을 때, 나머지가 전부 같은 M을 찾는 문제
const fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s=>parseInt(s.trim()));
let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s=>parseInt(s.trim()));
input.shift();
input = input.sort((a,b) => a-b);

let gcdVal = input[1] - input[0]; //나머지가 동일한게 무조건 존재한다는 조건
console.log(gcdVal);
for(let i=1; i<input.length-1; i++){ //그중에서 최대공약수를 찾으면 된다.
    gcdVal = GCD(input[i+1]-input[i],gcdVal);
    console.log(gcdVal);
}

console.log(...Divisor(gcdVal)); //그 최대공약수의 약수들이 정답

function GCD(a,b){ //유클리드 호제법 최대공약수 구하기
    let temp = undefined;
    while(b !== 0){
        temp = a%b; //일단 a와 b의 나머지를 구한다.
        if(temp === 0){ //나머지가 없다면 b를 출력.
            return b;
        } else { //그게 아니라면 다시 b와나머지를 나누어 나머지를 구한다.
            a = b;
            b = temp;
        }
    }
}

function Divisor(num) { //약수 구하기
    let numSQRT = Math.floor(Math.sqrt(num)); //숫자의 제곱근까지만 검사해도 된다.
    let divisor = [];
    for(let i = 2; i<=numSQRT; i++){ //1은 이 문제에서만 제외, 2부터 제곱근까지
        if(num%i===0) { //나머지가 없다면
            divisor.push(i); //일단 i를 넣고
            if(num/i !== i) divisor.push(num/i); //중복제거용 조건과 실제숫자/i를 넣기
        }
    }
    divisor.sort((a,b) => a-b); //정렬
    divisor.push(num); //자기 자신 넣기 (i가 1부터 시작한다면 필요없음)
    return divisor;
}