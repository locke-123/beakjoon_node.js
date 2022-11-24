//점화식의 값을 특정 상수로 나눈 나머지를 구하는 문제
const fs = require('fs');
let N = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
//let N = parseInt(fs.readFileSync('example.txt').toString().trim());
let memo = new Array(N);
//base case
if(N === 1){
    memo[0] = 1;
} else {
    memo[0] = 1; //n = 1
    memo[1] = 2; //n = 2
}
for(let i=2; i<N; i++){
    let nextVal = memo[i-1] + memo[i-2]; //핵심 식
    if(nextVal >= 15746){ //15746 보다 크다면 나머지를 넣기
        nextVal = nextVal%15746;
    }
    memo[i] = nextVal;
}
console.log(memo[N-1]);
/*
n   1 2 3 4 5 6
res 1 2 3 5 8 13?

f(n) = f(n-1) + f(n-2)   왜 이 00, 1 타일이 이런 식을 만드는지는 모르겟음

1   00  001 0011    00111   001111
    11  100 1100    10011   100111
        111 1001    11001   110011
            0000    11100   111001
            1111    00001   111100
                    00100   000011
                    10000   001001
                    11111   001100
                            100100
                            110000
                            000000
                            111111
                            100001
                            */