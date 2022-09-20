const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => parseInt(s.trim()));
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => parseInt(s.trim()));

let rem = [];
let result = 10; //모두 다른게 10개라 가정(무조건 10개가 주어짐)

for(let i=0;i<10;i++){
    rem.push(input[i]%42) //42의 rem을 push

    for(let j=0; j<i; j++){ //새로운 rem[i]와 rem[j]를 돌리며 비교
        if(rem[j]===rem[i]){ //중복이 나온다면 다른거(result) -1 하고 break
            result--;
            break;
        }
    }
}
console.log(result); //10에서 중복을 뺀 값 출력