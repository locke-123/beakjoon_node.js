const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let N = parseInt(input[0]); input.shift();

function info (direction, value) { //각 항목을 방향과 값으로 잡음
    this.direction = direction;
    this.value = value;
}

for(let i=0; i<input.length; i++){ //분리후 info 형태로 만드는 작업
    input[i] = input[i].split(' ').map(Number);
    input[i] = new info(input[i][0],input[i][1]);
}

let widthMax = 0;
let widthMaxIndex = -1;
let heightMax = 0;
let heightMaxIndex = -1;
for(let i=0; i<input.length; i++){ //각 해당하는 남,북 과 동,서 끼리 최대값과 최대값의 index를 찾는 과정
    if(input[i].direction === 1 || input[i].direction === 2){
        if(input[i].value > widthMax){
            widthMax = input[i].value;
            widthMaxIndex = i;
        }
    } else {
        if(input[i].value > heightMax){
            heightMax = input[i].value;
            heightMaxIndex = i;
        }
    }
}

let minIndex = Math.min(widthMaxIndex,heightMaxIndex); //최대 index중 가장 작은거
let largeBox = widthMax*heightMax; //큰 상자는 큰거끼리 곱
let smallBox = 1;

if(minIndex+1 !== widthMaxIndex && minIndex+1 !== heightMaxIndex){ //큰 direction의 값이 붙어있지않다면
    smallBox *= input[jumping5(minIndex,2)].value; //최대index중 가장 작은거가 0이므로 바로 2,3번째 index의 값을 가져오기
    smallBox *= input[jumping5(minIndex,3)].value;
} else {
    smallBox *= input[jumping5(minIndex+1,2)].value; //그게 아니라면 다음 최대index에서 부터 2,3번째 index 가져오기
    smallBox *= input[jumping5(minIndex+1,3)].value;
}
console.log((largeBox-smallBox) * N); //결과


function jumping5 (currentNum,jmpNum){ //순환형식을 구현하기 위한 함수
    if(currentNum + jmpNum > 5) { //5보다 크면 0부터 돌아가서 index 증가
        return (currentNum + jmpNum)-6;
    } else {
        return currentNum + jmpNum;
    }
}