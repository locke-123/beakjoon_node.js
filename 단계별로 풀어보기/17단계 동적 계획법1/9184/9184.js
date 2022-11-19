const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
//console.log(input);

let [a,b,c] = [20,20,20]; //20이상 부터는 1048576 으로 고정된다. 고로 20까지만 계산
let memo = new Array(a+1); //0이하부터는 마찬가지로 1로 고정, 그러므로 각 배열은 0~20 까지의 21개의 길이를 갖는 3차원 배열 생성
for(let i=0; i<=a; i++){
    memo[i] = new Array(b+1);
    for(let j=0; j<=b; j++){
        memo[i][j] = new Array(c+1).fill(null);
    }
}
for(let i=0; i<=a; i++){
    for(let j=0; j<=b; j++){
        for(let k=0; k<=c; k++){ //각 기준에 맞게 base 값 집어 넣기
            memo[i][j][0] = 1;
            memo[i][0][k] = 1;
            memo[0][j][k] = 1;
        }
    }
}

for(let i=1; i<=a; i++){
    for(let j=1; j<=b; j++){
        for(let k=1; k<=c; k++){ //base 값을 기반으로 계산해서 memo에 차곡차곡 저장
            if(i<j && j<k){
                memo[i][j][k] = memo[i][j][k-1] + memo[i][j-1][k-1] - memo[i][j-1][k];
            } else {
                memo[i][j][k] = memo[i-1][j][k] + memo[i-1][j-1][k] + memo[i-1][j][k-1] - memo[i-1][j-1][k-1];
            }
        }
    }
}
//이렇게 계산된 memo를 가지고 바로 여러 case에 적용시킨다.
let ans = '';
for(let i=0; i<input.length; i++){
    let [a1,b1,c1] = input[i].split(' ').map(Number); //각 case의 입력
    let res;
    if(a1 === -1 && b1 === -1 && c1 === -1){ //출력중지 조건
        break;
    } else {
        if(a1 <= 0 || b1 <=0 || c1 <= 0) res = 1; //뭐든 0이하면 1출력
        else if(a1>20 || b1>20 || c1>20) res = 1048576; //뭐든 20이상이면 1048576 출력
        else res = memo[a1][b1][c1] //아니면 memo에 저장된 값 가져오기
        ans += 'w('+a1+', '+b1+', '+c1+') = '+res + '\n';
    }
}
console.log(ans);