const fs = require('fs');
//let input = parseInt(fs.readFileSync('example.txt').toString());
let input = parseInt(fs.readFileSync('/dev/stdin').toString());

function ap(n) { //등차수열 판별기
    //각 자릿수 분해 4673 참조
    let nArray = [];
    while (n >= 1){
        nArray.push(Math.floor(n%10));
        n = n/10;
    }
    //각 자릿수를 배열로 할당
    //배열의 각 두 수의 차이가 일정한지 확인
    let gap = 0;
    for(let i=0; i<nArray.length;i++){
        if(i === 0){ //gap 초기 설정
            gap = nArray[i] - nArray[i+1];
        }
        if(nArray[i+1] === undefined){ //다음 내용 없으면 break
            break;
        }
        if(gap !== (nArray[i] - nArray[i+1])){
            return false; //gap이 일정하지 않음 false
        }
    }
    return true; //각 숫자가 등차수열이다.
}

let count = 0;
for(let i=1; i<input+1; i++){
    if(ap(i) === true){ //한수인 숫자를 count
        count++;
    }
}
console.log(count);