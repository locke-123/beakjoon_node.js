const fs = require('fs');
let input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
//let input = parseInt(fs.readFileSync('example.txt').toString().trim());

let inputArray = [];
while(input >= 1){
    inputArray.push(input%10);
    input = Math.floor(input/10);
}
inputArray.sort((a,b) => b-a);
console.log(inputArray.join(''));