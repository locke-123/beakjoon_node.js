const fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let T = parseInt(input[0]); input.shift();
for(let i=0; i<input.length; i++){
    let [x1,y1,x2,y2] = input[i].split(' ').map(Number); i++
    let n = parseInt(input[i]); i++
    for(let j=i; j<i+n; j++){
        let [cx, cy, r] = input[j].split(' ').map(Number);
        console.log(cx,cy,r);
    }
    i = i+n-1;
}