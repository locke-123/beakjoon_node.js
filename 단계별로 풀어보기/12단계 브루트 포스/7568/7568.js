const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let N = parseInt(input[0]);
function person (weight, height) { //몸무게와 키, 순위를 가지고있는 person 객체
    this.weight = weight;
    this.height = height;
    this.rank = 1;
}
let personArr = [];
for(let i=1; i<input.length; i++){
    let [W,H] = input[i].split(' ').map(s => parseInt(s));
    personArr.push(new person(W,H)); //person 객체로 할당
}
//console.log(personArr);
for(let i=0; i<personArr.length; i++){ //목표 
    for(let j=0; j<personArr.length; j++){ //비교대상
        if(i===j) continue; //목표와 비교대상 (자기자신)일경우 패스
        if(personArr[i].height < personArr[j].height && personArr[i].weight < personArr[j].weight){
            personArr[i].rank++; //목표보다 몸무게, 키가 큰 경우 자신의 순위에 +1
        }
    }
}
//console.log(personArr);

let ans = '';
for(let i = 0; i<personArr.length; i++){ //출력
    ans += personArr[i].rank+' ';
}
console.log(ans);