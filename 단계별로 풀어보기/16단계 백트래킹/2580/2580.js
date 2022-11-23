const fs = require('fs');
//9X9
let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let matrix = new Array(9);
for(let i=0; i<9; i++){
    matrix[i] = input[i].split(' ').map(Number);
}
//console.log(matrix);


function bt(col){//col = 0~8
    if(col === 9){
        //matrix = matrix?
        return;
    }
    for(let i=0; i<9; i++){
        //found zero
        if(matrix[col][i] !== 0){continue;}
        
        let numCandidate = emptyNum(matrix[col]);
        for(let j of numCandidate){
            
        }
    }
}


function emptyNum(arr){
    let set = new Set(arr);
    let res = [];
    for(let i=1; i<10; i++){
        if(set.has(i) === false){
            res.push(i);
        }
    }
    return res;
}