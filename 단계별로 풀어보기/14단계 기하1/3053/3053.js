const fs = require('fs');
let input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
//let input = parseInt(fs.readFileSync('example.txt').toString().trim());

//원의 넓이(유클리드)
console.log((Math.PI*input*input).toFixed(6)); // PI * r * r

//택시기하학 원의 넓이(비유클리드)
console.log((2*input*input).toFixed(6)); // 2 * r * r