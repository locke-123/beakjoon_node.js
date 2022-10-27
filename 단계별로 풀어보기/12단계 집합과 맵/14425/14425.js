const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
//집합 S 는 N, 검사할 항목은 M개로 주어진다.
let [N,M] = input[0].split(' ').map(Number);
input.shift();
//0부터 <N은 S, N부터 <M+N은 검사할 항목이다.

//일일히 검사하는 방법?
//S 정렬 후 b-search 사용 하는 방법?

let count = 0;
for(let i=0; i<N; i++){
    //console.log('i = ' + i);
    for(let j=N; j<N+M; j++){
        //console.log('        j = ' + j + '   ' + input[j]);
        if(input[j].includes(input[i])){
            //console.log('                 found');
            count++;
            input.splice(j,1);
            j--;
            M--;
        }
    }
}
console.log(count);

//제출해보기