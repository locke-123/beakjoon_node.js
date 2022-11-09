const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
//let input = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number);
let a = Math.max(...input); let b = Math.min(...input);
//유클리드 호제법(최대공약수)
let gcd = GCD(a,b);
console.log(gcd);
console.log(a*b/gcd); //최소공배수는 두수의곱/최대공약수  로 표현이 가능하다.

function GCD(a,b){ //유클리드 호제법
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