const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let N = parseInt(input[0]);
input = input[1].split(' ').map(Number);
//console.log(N,input);
let firstRing = input[0];
let ans = '';
for(let i = 1; i<N; i++){
    gcdVal = GCD(firstRing,input[i]); //첫링과 각각의 링의 최대공약수 구하기
    ans += firstRing/gcdVal +'/'+input[i]/gcdVal + '\n'; //각각을 최대공약수로 나누면 된다.
    //기약 분수로 표현을 해야하기 때문
}
console.log(ans);
/*
r = x r?
12/8 3/2 //최대공약수 4로 나누기
300/1
*/
function GCD(a,b){ //유클리드 호제법 최대공약수
    while(b !== 0){
        let r = a%b;
        if(r === 0){
            return b;
        }
        a = b;
        b = r;
    }
}