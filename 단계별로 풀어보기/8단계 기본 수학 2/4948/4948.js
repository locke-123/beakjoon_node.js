const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => parseInt(s.trim()));
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => parseInt(s.trim()));

while(input[0] !== 0){
    console.log(PrintPrime(input[0]));
    input.shift();
}

function PrintPrime(num){ //에라토스테네스의 체 알고리즘 활용
    if(num === 1) return 1; //1이면 1 반환
    let primeArray = new Set();
    for(let i=num+1; i<=num*2;i++){ //num보다 1 큰수 부터 num*2 까지 리스트 만들기
        primeArray.add(i);
    }

    for(let i=2; i<=Math.sqrt(num*2);i++){ //2부터 num*2의 제곱근 까지 i배수 제거
        for(let j=i+i; j<=num*2; j+=i){ //j는 자신제외한 i의 배수만큼 제거를 시작
            primeArray.delete(j);
        }
    }
    return primeArray.size; //남은 리스트의 사이즈를 반환
}