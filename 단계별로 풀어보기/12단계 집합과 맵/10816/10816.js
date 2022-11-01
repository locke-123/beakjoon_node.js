const fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
console.log(input);

//정리해야할 집합은 N이고, 비교할것은 M, 비교횟수와 출력역시 M
//정리시 카운팅 소트로 할지?
//집합 key=숫자 value=갯수 이렇게 할지?