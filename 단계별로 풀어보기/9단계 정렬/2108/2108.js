const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(Number);
let N = input[0];
input.shift();

let sum = 0; //산술 평균을 위한 sum
//console.log(input,N);

let max = 0;
for(i of input){
    if(Math.abs(i) > max){ //절댓값으로 가장 큰 수를 찾기 (음수가 포함되기 때문)
        max = Math.abs(i);
    }
}
//console.log(max);
let count = new Array(max*2+1).fill(0); //max의 음수를 포함해 2배 늘린만큼 배열 생성
//console.log(count);
for(i of input){
    sum += i; //산술 평균 계산
    count[i+max]++;
}
let freNum = []; //최빈값 계산을 위한 배열
for(i in count){
    if(Math.max(...count) === count[i]){
        freNum.push(i-max);
    }
} //최빈값 계산 끝
//console.log(freNum);
for(let i = 1; i<count.length; i++){
    count[i] += count[i-1];
}
//console.log(count);
let sortedInput = new Array(input.length);
for(i of input){
    sortedInput[count[i+max]-1] = i;
    count[i+max]--;
}
//console.log(sortedInput);

//산술평균 : N개의 수들의 합을 N으로 나눈 값
if(Math.round(sum/N) === 0){
    console.log(0);
} else {
    console.log(Math.round(sum/N));
}
//중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
console.log(sortedInput[Math.floor(N/2)]);
//최빈값 : N개의 수들 중 가장 많이 나타나는 값
if(freNum.length > 1){
    console.log(freNum[1]); //어차피 count를 통해 순서대로 정렬되어있으므로 [1]로 충분하다
} else {
    console.log(freNum[0]);
}
//범위 : N개의 수들 중 최댓값과 최솟값의 차이
console.log(sortedInput[sortedInput.length-1]-sortedInput[0]);

//아무래도 카운팅 소트를 이용해야할듯, 절댓값 제일 큰수를 기준으로 배열을 2배해서
//max를 0으로 잡고 max가 4000이면 총 배열은 8000개, index 4000이 0을 뜻하고 4001이 1, 3999가 -1
//을 뜻하게 한다. 8000이 4000이 되는거고 0이 -4000이 되는 방식