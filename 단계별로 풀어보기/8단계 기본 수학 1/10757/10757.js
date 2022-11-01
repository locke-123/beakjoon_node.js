const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(s => BigInt(s));
//let input = fs.readFileSync('example.txt').toString().trim().split(' ').map(s => BigInt(s));
//매우 큰수를 다룰 때에는 BigInt를 사용한다.
console.log((input[0]+input[1]).toString());
//또한 bigint 사용시 숫자 뒤에 n이 붙는데 tostring을 사용하여 이를 제거한다.