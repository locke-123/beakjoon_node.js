const fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let input = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number);
let [n,k] = input;           //     n!          각각의 2와 5의 배수를 구하면된다.
console.log(n,k);            //   k!(n-k)!

console.log(getTwoFive(30));

function getTwoFive(n){
    let ans = [];
    let n2 = n;
    let n5 = n;
    let ans2 = 0;
    while(n2 >= 2){
        ans2 += parseInt(n2/2);
        console.log(n2);
        n2 /= 2;
    }
    ans.push(ans2);
    let ans5 = 0;
    while(n5 >= 5){
        ans5 += parseInt(n5/5);
        n5 /= 5;
    }
    ans.push(ans5);
    return ans;
}