const fs = require('fs');
let input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
//let input = parseInt(fs.readFileSync('example.txt').toString().trim());

console.log(fact(input));

function fact(number) {
    if(number === 0){
        return 1;
    }
    return number*fact(number-1);
}