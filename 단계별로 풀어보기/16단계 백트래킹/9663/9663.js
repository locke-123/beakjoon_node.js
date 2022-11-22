const fs = require('fs');
let N = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
//let N = 8;
//퀸은 서로 대각선, 가로, 세로 모두 놓을 수 없다.
let count = 0;
let matrix = new Array(N+1); //퀸의 위치를 정확히 나타내는 2차원 배열 (row,col)
for(let i=0; i<=N; i++){
    matrix[i] = new Array(N+1).fill(0);
}
let pos = new Array(N+1); //퀸이 같은 열에 존재하는지 확인하는 pos 1차원 배열
//위의 두 배열은 index 0 은 사용하지 않는다. (편의상)


function bt(col){
    if(col === N+1){ //N+1번째 열에 도달하면 모든 조건이 맞으므로 경우의 수 +1
        count++; return;
    }
    for(let i=1; i<=N; i++){ //1째열부터 N번째 열까지 진행
        if(pos[i] === 1) {continue;} //같은 열에 퀸이 존재하면 패스(유망체크1)
        let colpromise = col-1; //대각선 체크용 변수 colpromise,up,flag
        let up = 1;
        let flag = true;
        while(colpromise >= 1){ //대각선 체크 while문 (이는 후에 간단하게 if문 식하나로 표현가능하다.)
            let posrow = i+up; //오른쪽 행의 대각선 index
            let negrow = i-up; //왼쪽 행의 대각선 index
            if(posrow <= N && matrix[colpromise][posrow] === 1){ //오른쪽 행이 N보다 같거나 작고 거기에 존재한다면 이 i는 유망 X
                flag = false; break;
            } else if (negrow >= 1 && matrix[colpromise][negrow] === 1){ //왼쪽 행이 0보다 크고 거기 존재하면 유망 X
                flag = false; break;
            }
            up++; //올리는 열에 따라 대각선이므로 행에 대해서 조정할 변수
            colpromise--; //다음 검사할 열을 한단계씩 올리는 작업
        }
        if(flag === false){ //위의 대각선 체크에서 유망이 false이면 패스(유망체크2)
            continue;
        }
        //같은 행인지 체크하는 부분은 이미 한 열에 한개씩 넣는다는 bt(col)이므로 따로 체크할 필요 없음
        
        //이 밑에는 유망할 시 시행하는 구문
        matrix[col][i] = 1; //퀸을 구체적인 i포지션에 넣기
        pos[i] = 1; //같은 열인지 확인하는 배열에 표시
        bt(col+1); //그 하위 열(하위노드)에서 계속해서 검사
        matrix[col][i] = 0; //그 자리에서 빼는작업 back
        pos[i] = 0; //backtracking
    }
}

bt(1);
console.log(count);
/*
  1  2  3  4
1          o       col=1  i=4
2 o     o        col=2   i=3,1
3    ?           col=3   i=2
4

i = 2   col = 3
*/