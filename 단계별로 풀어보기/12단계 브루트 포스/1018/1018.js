const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let [N,M] = input[0].split(' ').map(Number);
input.shift();
//console.log(N,M);
//N은 세로 M은 가로
//Black 0 White 1;
let wbArray = [];
for(let i=0; i<input.length; i++){ //배열은 [세로][가로]로 접근해야함
    wbArray[i] = input[i].split('').map(
        function (ele) {
            if(ele === 'W'){ //split 할때 각 원소가 W이면 1로, B이면 0으로 해서 새롭게 2차원 배열을 만든다.
                return 1;
            } else {
                return 0;
            }
        }
    )
}

let ansArray = []; //ansArray는 각 8X8로 잘랐을때 최소로 칠하는 결과들의 모임

for(let i=0; i<N-7; i++){ //세로 시작지점 선택
    for(let j=0; j<M-7; j++){ //가로 시작지점 선택
        ansArray.push(score(i,j)); //8X8을 각 i와 j부터 잘랐을때의 score를 ansArray에 저장
    }
}
//console.log(ansArray);

console.log(Math.min(...ansArray)); //이중에서 가장 작은 값이 결과

function score(col,row) { //스코어 함수에는 세로와 가로 순으로 입력이 들어간다.
    let testCase = []; 
    for(let i=0; i<8; i++){
        testCase[i] = []; //testCase를 만들면서 이차원 배열로 생성중
    }
    let a = 0;
    for(let i=col; i<col+8; i++){
        let b = 0;
        for(let j=row; j<row+8; j++){
            testCase[a][b] = wbArray[i][j]; //wbArray의 시작지점 col,row 부터 각 8x8까지를 tescase에 할당하는중
            b++;
        }
        a++;
    }

    //시작점이 black일 때를 가정하고 차이를 count한다.
    let flag = 0; //비교할 숫자 (0과 1을 번갈아 가면서 비교한다.)
    let countB = 0; //시작지점이 B일 경우 점수
    let countW = 0; //시작지점이 W일 경우 점수
    for(let i = 0; i<8; i++){
        for(let j=0; j<8; j++){ //각각의 요소마다 빅쇼
            if(flag !== testCase[i][j]) { //flag와 testcase의 해당 요소가 다르다면 (시작지점이 B인 체스판과 일치하지않는다면)
                countB++; //B의 count를 증가 (색칠해야할 칸 수)
            } else { //반대인 경우 W로 시작하는 체스판에서 칠해야한다는 의미이므로 countW가 증가
                countW++;
            }
            flag = swF(flag); //가로로 전진하며 flag를 스위치한다.
        }
        flag = swF(flag); //각 가로줄이 끝나고 새로운 세로줄이면 flag를 스위치한다.
    }
    //console.log(countB);
    //console.log(countW);

    return Math.min(countB, countW); //모두 끝나고 countB와 countW를 비교한 후 작은값을 출력한다.
}

function swF (flag){ //flag 스위치 함수
    if(flag === 1){
        return 0;
    } else {
        return 1;
    }
}