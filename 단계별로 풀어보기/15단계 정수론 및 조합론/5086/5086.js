const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let i = 0;
let ans = '';
while(1){
    let [t1,t2] = input[i].split(' ').map(Number);
    if(t1 === 0 && t2 === 0) break;
    if(t1%t2 === 0){
        ans += 'multiple\n';
    } else if(t2%t1 === 0){
        ans += 'factor\n';
    } else {
        ans += 'neither\n';
    }
    i++
}
console.log(ans);