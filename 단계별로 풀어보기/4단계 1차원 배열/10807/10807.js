const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let N = parseInt(input[0]);
let arr = input[1].split(' ').map(Number);
let target = parseInt(input[2]);
//console.log(N,arr,target);
let numMap = new Map();
for(let i=0; i<N; i++){
    if(numMap.has(arr[i])){
        numMap.set(arr[i], numMap.get(arr[i])+1);
    } else {
        numMap.set(arr[i], 1);
    }
}
//console.log(numMap);

if(numMap.get(target) === undefined){
    console.log(0);
} else {
    console.log(numMap.get(target));
}