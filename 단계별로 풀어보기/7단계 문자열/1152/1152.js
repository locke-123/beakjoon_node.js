const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().trim().split(' ');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
if(input[0] === ''){ //공백만 넣은 경우
    console.log(0);
} else {
    console.log(input.length);
}