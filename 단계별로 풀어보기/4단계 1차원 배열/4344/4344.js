const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => s.trim());
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => s.trim());

let C = parseInt(input[0]);
input.shift();
let N = undefined;
let sum = undefined;
let average = undefined;
let count = undefined;
let testCase = [];

for(let i=0;i<C;i++){
    sum = 0;
    count = 0;
    testCase = input[i].split(' ').map(s => parseInt(s));
    N = testCase[0]; //학생 수 할당
    testCase.shift();

    for(j in testCase){ //성적 합계
        sum += testCase[j];
    }
    average = sum/N; //평균값 계산
    for(k in testCase){ //평균 이상인 학생 수 계산
        if(testCase[k] > average){
            count++;
        }
    }
    //평균이상학생수/전체학생수*100 => 평균넘는 학생들 비율
    console.log(((count/N)*100).toFixed(3)+'%');

    //아래의 두 방식은 예제에 따라서 소수 둘째 자리까지 출력하는 문제를 일으킨다.
    //console.log(((count/N)*100).toPrecision(5)+'%'); //유효자릿수
    //console.log((Math.round((count/N)*100000)/1000)+'%'); //math의 반올림
}