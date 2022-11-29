const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s=>s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s=>s.trim());
let N = parseInt(input[0]);
let memo = [];
//R = 0  G = 1 B = 2
memo[1] = input[1].split(' ').map(Number);
for(let i=2; i<input.length; i++){
    let [R,G,B] = input[i].split(' ').map(Number);
    
    memo[i] = [Math.min(memo[i-1][1]+R,memo[i-1][2]+R),
                Math.min(memo[i-1][0]+G,memo[i-1][2]+G),
                Math.min(memo[i-1][0]+B,memo[i-1][1]+B)];
}
console.log(Math.min(...memo[N]));

/*
R  G  B
0  1  2
            *점화식을 세우는게 가장 중요한 동적계획법" (물론 백트래킹으로도 가능할듯)
fx = 1~x 까지 색칠 최소
f(X) = min(r(x),b(x),g(x));  r(x) = 마지막 r일때 최소 = r(x) = min(g(x-1),b(x-1)) + r비용
f(x-1) = min(r(x-1),g(x-1),b(x-1);
f(2) = min(r(2), g(2), b(2)) = min(min(g(1),b(1))+r비용, min(r(1),b(1))+g비용, min(g(1),b(1))+b비용)
*/