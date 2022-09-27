const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => parseInt(s.trim()));
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => parseInt(s.trim()));
let T = input[0];
input.shift();

let primeArray = new Set(); //에라토스테네스의 체 활용해서 소수 집합(set) 미리 만들기
for(let i = 2; i<=10000; i++){ //2부터 10000 까지
    primeArray.add(i);
}

for(let i=2;i<=Math.sqrt(10000);i++){
    for(let j=i+i; j<=10000; j+=i){
        primeArray.delete(j);
    }
} //체로 걸러서 소수 리스트 만들어 놓기

for(let i=0; i<T; i++){ //T만큼 실행
    let N = input[i];
    for(let k=0; k<=N/2; k++){ //k는 0부터 N/2 까지 -1하고 +1하면서 차이가 가장 작은 수 찾기
        if(primeArray.has(N/2-k) === true && primeArray.has(N/2+k) === true){
            //목표 수의 절반 부터 하나씩 줄이고 늘려가면서 두 수 모두 소수에 해당하면
            if((N/2-k) + (N/2+k) === N){ //그리고 이 두수의 덧셈이 N이라면
                console.log(N/2-k, N/2+k); //출력하기
                break;
            }
        }
    }
}