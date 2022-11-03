const fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let N = parseInt(input[0]); input.shift();

let count = new Array(4).fill(0);
for(let i=0; i<input.length; i++){
    input[i] = input[i].split(' ').map(Number);
    count[input[i][0]-1] += 1;
}
console.log(input,count);
/*
4 50
2 160
3 30
1 60  --
3 20  --
1 100

3 20 --
1 100
4 50    1
2 160   1
3 30
1 60  --
*/