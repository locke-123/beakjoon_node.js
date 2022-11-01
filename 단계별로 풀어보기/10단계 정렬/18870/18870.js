const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let N = parseInt(input[0]);
input.shift();
input = input[0].split(' ').map(s => parseInt(s));

let numberSet = new Set(input); //set을 이용해서 생성하면 중복이 제거된다.
let number = [...numberSet]; //다시 set에서 배열로 할당

//각 숫자들을 작은 수 부터 정렬함으로써 index가 0부터 시작하게 하기
number.sort((a,b) => a-b);

//find라는 배열에 각 ele의 index에 기존 index(압축된 좌표)를 저장
let find = [];
number.forEach((ele, index) => find[ele] = index); //number의 내용과 index를 각 할당
let ans = ''; //출력
for(let i=0; i<N; i++){
    ans += find[input[i]]+' ';
}
console.log(ans);