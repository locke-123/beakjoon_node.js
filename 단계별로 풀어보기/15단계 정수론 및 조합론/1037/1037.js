const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let list = input[1].split(' ').map(Number);
console.log(Math.max(...list)*Math.min(...list));

/*
const fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
input[0] = parseInt(input[0]);
let list = input[1].split(' ').map(Number);
list = list.sort((a,b) => a-b);
console.log(list[0]*list[input[0]-1]);
*/