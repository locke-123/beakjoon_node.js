const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => s.trim());
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => s.trim());

let n = parseInt(input[0]); //과목수 n 할당
input = input[1].split(' ').map(s => parseInt(s));

let max = 0;
for(let i=0;i<n;i++){ //최댓값 구하기
    if(input[i] >max){
        max = input[i];
    }
}

let newScore =[];
for(let i=0;i<n;i++){ //새로운 점수 newScore에 할당
    newScore.push(input[i]/max*100);
}

let sum = 0;
for(i in newScore){ //새로운 점수 합 계산
    sum += newScore[i];
}

console.log(sum/n); //평균 출력