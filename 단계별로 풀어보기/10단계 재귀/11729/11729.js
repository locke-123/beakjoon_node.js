const fs = require('fs');
let input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
//let input = parseInt(fs.readFileSync('example.txt').toString().trim());

let ans = '';
let a=[1001], b=[1002], c=[1003]; //배열을 알아볼 수 있도록 & 가장 큰숫자가 밑으로 가는 조건을 위해
let count = 0;
for(let i=input; i>0; i--){
    a.push(i); //a에 input에 해당하는 원판 넣는 작업 ex) 3 => a[1001,3,2,1]
}

function recursion (n,souarr,midarr,desarr) { //옮길 원판수, 시작지점, 거쳐갈지점, 도착지점
    if(n === 1){ //n이 1이면 소스의 맨 끝에서 도착의 맨 끝을 비교후 도착지점 원판이 더 크면
        if(souarr[souarr.length-1] < desarr[desarr.length-1]){
            ans += souarr[0]%1000+' '+desarr[0]%1000+'\n'; //각 arr의 맨 첫값으로 어디서 어디가는지 식별
            desarr.push(souarr.pop()); //소스원판빼서 도착원판에 넣기
            count++; //옮긴수 ++
        }
    } else { //하노이는 결국 중간지점에 바로 전단계를 완성하고 가장 밑 판을 3번째로 옮기고 다시 전단계를 마지막지점으로 옮기는 것이다.
        recursion(n-1,souarr,desarr,midarr); //중간지점에 전단계 완성 ex) 5이면 [5],[4,3,2,1],[]
        recursion(1,souarr,midarr,desarr); //끝지점에 가장큰 원판 옮기기 ex)[],[4,3,2,1],[5]
        recursion(n-1,midarr,souarr,desarr); //다시 전단계만큼 중간에서 끝으로 옮기기 ex)[],[],[5,4,3,2,1]
    }
}
recursion(input,a,b,c); //옮길 원판수와 각 배열 넣기

console.log(count);
console.log(ans);