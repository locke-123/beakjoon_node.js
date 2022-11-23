const fs = require('fs');
//9X9
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let matrix = new Array(9);
for(let i=0; i<9; i++){
    matrix[i] = input[i].split(' ').map(Number);
}
//console.log(matrix);

let zeroCase = []; //0이 들어있는 좌표에 대해서 백트래킹 수행
for(let i=0; i<9; i++){
    for(let j=0; j<9; j++){
        if(matrix[i][j] === 0){
            zeroCase.push([i,j]); //0들어있는 좌표 zeroCase 생성
        }
    }
}

let ans = '';
let numCase = 0; //몇번째 zerocase인지에 대한 index
let finished = false; //답을 찾았는지
bt(zeroCase[numCase]);
console.log(ans);

function bt(Zcase){
    if(numCase >= zeroCase.length){ //마지막 zero케이스까지 끝난거라면 답이므로 출력+백트래킹 중지
        for(let i=0; i<9; i++){
            ans += matrix[i].join(' ')+'\n';
        }
        finished = true;
        return;
    }
    let col = Zcase[0]; //열
    let row = Zcase[1]; //행
    for(let i=1; i<=9; i++){
        let flag = false; //이 flag는 promising 에 대한 flag (따로 분리하지 않음)
        //check row
        for(let j of matrix[col]){ //같은 행 체크
            if(j === i){flag = true; break;}
        }
        if(flag === true) {continue;}
        //check col
        for(let j=0; j<9; j++){ //같은 열 체크
            if(matrix[j][row] === i){flag = true; break;}
        }
        if(flag === true) {continue;}
        //check sqr
        let col3 = Math.floor(col/3)*3; //3x3 체크
        let row3 = Math.floor(row/3)*3;
        for(let j=col3; j<col3+3; j++){
            for(let k=row3; k<row3+3; k++){
                if(matrix[j][k] === i){flag = true; break;}
            }
            if(flag === true) break;
        }
        if(flag === true) {continue;}
        //다 통과시 matrix에 넣고 bt 계속
        matrix[col][row] = i;
        numCase++;
        bt(zeroCase[numCase]);
        if(finished === true){return;} //만약 이미 끝난거라면 더이상 백트래킹 중지 그대로 나오기
        numCase--;
        matrix[col][row] = 0;
    }
}