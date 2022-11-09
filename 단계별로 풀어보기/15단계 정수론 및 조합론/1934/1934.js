const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let T = parseInt(input[0]);
let ans = '';
for(let i=1; i<input.length; i++){
    let [a,b] = input[i].split(' ').map(Number);
    ans += (a*b/GCD(a,b)) + '\n';
}
console.log(ans);

function GCD(a,b){ //유클리드 호제법
    let temp = undefined;
    while(b !== 0){
        temp = a%b; //일단 a와 b의 나머지를 구한다.
        if(temp === 0){ //나머지가 없다면 b를 출력.
            return b;
        } else { //그게 아니라면 다시 b와나머지를 나누어 나머지를 구한다.
            a = b;
            b = temp;
        }
    }
}