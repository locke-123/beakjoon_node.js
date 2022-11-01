//듣보잡
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let [N,M] = input[0].split(' ').map(Number); input.shift();

let S = input.splice(0,N);
input.sort(); //출력이 사전순이여야 하므로 미리 sort
let mySet = new Set(S); //중복이 없으며 단순히 존재하는지만 확인하면 되므로 Set으로 해결

let count = 0;
let ans = '';
for(let i=0; i<M; i++){
    if(mySet.has(input[i])){ //Set안에 있으면 듣도보도못한게 됨
        count++;
        ans += input[i] + '\n';
    }
}
console.log(count);
console.log(ans);

//출력시 사전순