const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => parseInt(s.trim()));
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => parseInt(s.trim()));

let T = input[0];
input.shift();
let k = undefined;
let n = undefined;
for(let i=0; i<T; i++){
    k=input[0];
    input.shift();
    n=input[0];
    input.shift();
    console.log(Findfloor(k)[n-1]); //k층의 각 호실 사람수의 배열에 n-1만큼하면 n호실의 사람수 출력
}

function Findfloor(a){ //재귀함수
    let res = []; //result
    if(a === 0){res = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]} //0층의 경우 각 호실의 사람수
    else {
        let ref = Findfloor(a-1); //a-1층의 각 호실의 사람수
        for(let i=0; i<ref.length;i++){
            if(i === 0) res[i] = 1; //각 층의 1호실은 무조건 1명
            else {
                res[i] = res[i-1] + ref[i]; //각 호실의 사람수는 해당층의 전호실 사람수 + 아래층의 호실 사람수
            }
        }
    }
    return res; //a층에 해당하는 각 호실의 사람수 배열 return
}