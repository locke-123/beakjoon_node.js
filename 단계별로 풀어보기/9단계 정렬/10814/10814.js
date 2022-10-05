const { throws } = require('assert');
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let N = parseInt(input[0]);
input.shift();

let Person = function (age, name) { //회원 객체 정의
    this.name = name;
    this.age = age;
}

let personArray = new Array(N);
for(i in input){ //회원 객체 배열에 각 데이터 할당
    let [age,name] = input[i].split(' ');
    personArray[i] = new Person(age,name);
}

personArray.sort((a,b) => a.age - b.age); //정렬

let ans = '';
for(i in personArray){ //출력
    ans += personArray[i].age+' '+personArray[i].name+'\n';
}
console.log(ans);