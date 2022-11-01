const fs = require('fs');
//let input = parseInt(fs.readFileSync('example.txt').toString().trim());
let input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

let i = 1;
while(input > 1){
    input -= 6*i; //패턴상으로 벌집의 경로가 i가 늘어날 수록, 벌집 호실의 숫자는 6의 i 배수만큼 늘어나는데,
    i++; //이를 천천히 빼주어서 결과적으로 1이거나 1보다 작을때 까지 빼준다.
}
console.log(i);