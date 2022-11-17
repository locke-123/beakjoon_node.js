const fs = require('fs');
let [N,M] = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number);
console.log(N,M)
//1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열 길이=M
//당분간 자료구조-DFS..등-백트래킹까지 공부후 진행