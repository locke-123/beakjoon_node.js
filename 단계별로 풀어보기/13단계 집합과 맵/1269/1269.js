//대칭 차집합
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let [sizeA,sizeB] = input[0].split(' ').map(Number);

let mySet = new Set(input[1].split(' ').map(Number)); //mySet은 A에 대한 배열을 Set형태로 만든것
let B = input[2].split(' ').map(Number);

let count = 0; //A와 B에 중복되는 값의 개수
for(let i=0; i<sizeB; i++){
    if(mySet.has(B[i])){ //A에 B의 원소가 있다면
        count++;
    }
}
console.log((sizeA-count)+(sizeB-count)); //A의 크기와 B의 크기에서 각각 중복된 원소를 뺀고난 값을 더하면 됨