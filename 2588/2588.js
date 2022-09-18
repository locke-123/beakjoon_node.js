const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => parseInt(s.trim()));
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => parseInt(s.trim()));

let a = input[0];
let b = input[1];

//세 자리 자연수 십의 배수로 분해 ex) 400, 70, 2
let arrayA = [a%10, Math.floor(a/10%10)*10, Math.floor(a/100)*100]
let arrayB = [b%10, Math.floor(b/10%10)*10, Math.floor(b/100)*100]

//result에 (3), (4), (5), (6) 각각에 맞게 곱한 수 할당
let result = [0,0,0,0];
for(let i=0; i<3; i++){
    for (let j=0; j<3; j++){
        result[i] += arrayB[i]*arrayA[j];
    }
}
result[3] = result[0]+result[1]+result[2];

//출력
console.log(result[0]);
console.log(result[1]/10);
console.log(result[2]/100);
console.log(result[3]);