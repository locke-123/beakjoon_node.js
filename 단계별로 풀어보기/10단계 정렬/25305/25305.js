const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => s.trim());
let [N,k] = input[0].split(' ').map(Number);
input = input[1].split(' ').map(Number);
//console.log(N,k,input);

//카운팅 소트(계수 정렬)을 사용해서 구현해보았다.
let max = Math.max(...input);
//console.log(max);

let count = new Array(max+1).fill(0);
for(i of input){
    count[i]++;
}

for(let i=1; i<=max; i++){
    count[i] += count[i-1];
}

let result = new Array(input.length);
for(i of input){
    result[count[i]-1] = i;
    count[i]--;
}
//console.log(result);

console.log(result[result.length-k]);