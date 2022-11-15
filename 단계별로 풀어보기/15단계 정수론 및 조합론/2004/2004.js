const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
//let input = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number);
let [n,k] = input;           //     n!          각각의 2와 5의 배수를 구하면된다.
//console.log(n,k);            //   k!(n-k)!      +1676 도 이와 같은 방법으로 구하기 가능 한번 해보기

let nNum = getTwoFive(n);
let kNum = getTwoFive(k);
let n_kNum = getTwoFive(n-k);

let twoNum = nNum[0] - (kNum[0] + n_kNum[0]);
let fiveNum = nNum[1] - (kNum[1] + n_kNum[1]);

console.log(Math.min(twoNum,fiveNum));

function getTwoFive(n){ //원리는 정확히 파악 못함. 관련정보 공부
    let ans = [];
    let n2 = n;
    let n5 = n;
    let ans2 = 0;
    while(n2 >= 2){ //n! 안에서 2의 갯수 구하기
        ans2 += parseInt(n2/2);
        n2 /= 2;
    }
    ans.push(ans2);
    let ans5 = 0;  //5의 갯수 구하기
    while(n5 >= 5){
        ans5 += parseInt(n5/5);
        n5 /= 5;
    }
    ans.push(ans5);
    return ans;
}