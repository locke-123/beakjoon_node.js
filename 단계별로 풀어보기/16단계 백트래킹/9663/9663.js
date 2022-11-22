const fs = require('fs');
//let N = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
let N = 8;
//퀸은 서로 대각선, 가로, 세로 모두 놓을 수 없다.
let count = 0;
let matrix = new Array(N+1);
for(let i=0; i<=N; i++){
    matrix[i] = new Array(N+1).fill(0);
}
let pos = new Array(N+1);

function bt(col){
    if(col === 9){
        count++; return;
    }
    for(let i=1; i<=N; i++){
        if(pos[i] === 1) {continue;}
        let colpromise = col-1;
        let up = 1;
        while(colpromise >= 1){
            let posrow = i+up;
            let negrow = i-up;
            if(posrow >= 1 && )
            up++;
            colpromise--;
        }
        matrix[col][i] = 1;
        pos[i] = 1;
        bt(col+1);
        matrix[col][i] = 0;
        pos[i] = 0;
    }
}

bt(1);
  1  2  3  4
1          o       col=1  i=4
2 o     o        col=2   i=3,1
3    ?           col=3   i=2
4

i = 2   col = 3
