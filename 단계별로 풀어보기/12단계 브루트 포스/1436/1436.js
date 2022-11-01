const fs = require('fs');
let input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
//let input = parseInt(fs.readFileSync('example.txt').toString().trim());

let Tcase = 666;
let ans = '';
let count = 1;
while(count <= input){
    ans = Tcase.toString();
    if(ans.includes('666')){
        count++;
    }
    Tcase++;
}
console.log(ans);