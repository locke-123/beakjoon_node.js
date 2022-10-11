const fs = require('fs');
let input = parseInt(fs.readFileSync('example.txt').toString().trim());
console.log(input);

let arr = indivNums(input);

for(let i=input-1;i>=input-(arr.length*9);i--){
    console.log(i);
}
999

function indivNums(num) {
    let arr = [];
    while(num >= 1){
        arr.push(Math.floor(num%10));
        num = Math.floor(num/10);
    }
    return arr;
}