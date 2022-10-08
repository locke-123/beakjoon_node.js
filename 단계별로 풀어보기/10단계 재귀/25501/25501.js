const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let T = parseInt(input[0]);
input.shift();

let count = 0;

function recursion(s,l,r){
    count++;
    //console.log(l,r,s[l],s[r],s)
    if(l >= r) return 1; //시작값이 마지막보다 같거나 크다면 palindrome 맞음
    else if(s[l] !== s[r]) return 0; //그 중간에 각각 단어가 다르다면 0 반환
    else return recursion(s, l+1, r-1); //둘 다 아니면 l은 증가, r은 감소하고 다시 검색
}

function isPalindrome(s){ //처음에 s와 s시작값, 전체길이에서 -1한 s의 index를 각각 준다.
    return recursion(s, 0, s.length-1);
}

for(let i in input){
    console.log(isPalindrome(input[i]), count);
    count = 0;
}