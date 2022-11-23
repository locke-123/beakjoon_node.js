const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
let N = parseInt(input[0]);
let A = input[1].split(' ').map(Number);
let O = input[2].split(' ').map(Number);

let res = A[0]; //현재 계산된 수열 값
let index = 1; //수열의 index
let max = null;
let min = null;
bt(index);
console.log(max === 0 ? 0 : max); //js에서만 -0, +0 취급하는거 주의
console.log(min === 0 ? 0 : min); //-0 으로 출력시 오답처리됨

function bt(index){
    if(A.length === index){ //수열의 끝이라면 max, min 계산
        if(max === null){
            max = res;
        } else {
            max = Math.max(max,res);
        }
        if(min === null){
            min = res;
        } else {
            min = Math.min(min,res);
        }
        return;
    }
    for(let i in O){ //operator 연산자 안에서 순환 한 연산자 자리는 무조건 +,-,*,/ 중 하나이기 때문
        if(O[i] === 0){continue;} //연산자 남은게 0 이면 패스
        let temp = res; //이전값으로 되돌리기 위한 변수
        switch(parseInt(i)){ //i의 index에 따라서 +,-,*,/ 계산
            case 0:
                res = res + A[index];
                break;
            case 1:
                res = res - A[index];
                break;
            case 2:
                res = res * A[index];
                break;
            case 3: //나누기의 경우 특정 조건에 따라서 계산
                if(res < 0){
                    res = Math.abs(res);
                    res = Math.floor(res / A[index]);
                    res = -res;
                } else {
                    res = Math.floor(res / A[index]);
                }
                break;
        }
        O[i]--; //연산자 카운트 감소
        index++; //다음 수열 선택
        bt(index); //다음으로 더 들어가기
        O[i]++; //연산자 카운트 ++
        index--; //이전수열로
        res = temp; //값도 계산 이전으로 되돌리기
    }
}