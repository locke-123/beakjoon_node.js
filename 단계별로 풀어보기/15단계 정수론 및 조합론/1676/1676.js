const fs = require('fs');
let input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
//let input = parseInt(fs.readFileSync('example.txt').toString().trim());
//console.log(BigInt(input));

function fact(n){ //팩토리얼 
    n = BigInt(n); //숫자 매우 커져서 bigint 사용
    if(n === 1n){
        return BigInt(1);
    }
    return n * fact(n-BigInt(1));
}

let num = undefined;
if(input === 0){ //n = 0일때 주의
    num = '1';
} else {
    num = fact(input).toString();
}
//console.log(num);
let count = 0;
let lastZero = num.length-1 //문자열로 변환후 가장 뒷자리 부터 확인
while(lastZero > 0){ //문자열 다 돌때까지
    if(num[lastZero] !== '0'){ //마지막이 0아니면 즉시 종료
        break;
    } else { //0이라면 count 올리고 lastzero 1 줄이기
        count++;
        lastZero--;
    }
}
console.log(count);