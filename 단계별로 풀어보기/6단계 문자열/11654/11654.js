const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString();
let input = fs.readFileSync('/dev/stdin').toString();

console.log(input.charCodeAt()); //문자열.charCodeAt(index 위치); 문자열 => 아스키코드