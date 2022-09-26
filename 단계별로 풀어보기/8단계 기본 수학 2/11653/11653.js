const fs = require('fs');
//let input = parseInt(fs.readFileSync('example.txt').toString().trim());
let input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

while(input !== 1){ //input이 1이 될때 까지 소인수 분해
    console.log(PrimeFact(input)); //출력
    input /= PrimeFact(input); //input을 소수로 나눈 값 갱신
}


function PrimeFact(num){ //나눌수 있는 가장 작은 소수 찾는 함수
    for(let i=2; i<num; i++){ //2부터 num까지 탐색
        if(num%i === 0){ //만약 나눌 수 있다면
            return i; //나누는수 출력
        }
    }
    return num; //없으면 자기 자신 출력
}