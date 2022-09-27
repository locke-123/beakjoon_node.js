const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().trim().split(' ').map(s => parseInt(s));
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(s => parseInt(s));
let M = input[0];
let N = input[1];

let primeArray = new Set();
//에라토스테네스의 체 라는 알고리즘을 활용해야한다.
for(let i=2;i<=N;i++){ //2부터 N까지 일단 배열을 할당한다.
    primeArray.add(i);
}

for(let i=2;i<=Math.sqrt(N);i++){ //최대값의 제곱근 만큼만 배수를 제거해주기 위해 i의 배수를 제거할 예정
    for(let j=i+i;j<=N;j+=i){ //i의 배수를 j에 넣어서 해당하는 값을 제거 ,i와 같은값을 제외한 i+i부터 시작
        primeArray.delete(j); //해당하는 값 제거
    }
}

let ans = [];
for(let i of primeArray){
    if(M<=i && i<=N){ //M보다 크고 N보다 작은 값으로 새로운 ans에 넣기
        ans.push(i);
    }
}
console.log(ans.join('\n')); //출력