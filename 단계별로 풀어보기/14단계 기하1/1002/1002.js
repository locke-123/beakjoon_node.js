const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
//console.log(input);
let T = parseInt(input[0]); input.shift();
for(let i=0; i<T; i++){
    let [x1,y1,r1,x2,y2,r2] = input[i].split(' ').map(Number);
    let d = Math.sqrt((x1-x2)**2 + (y1-y2)**2); //두 원의 중점 사이의 거리 d
    //console.log(x1,y1,r1,x2,y2,r2,d);
    console.log(findAxisNum(r1,r2,d)); //r1,r2,d를 사용해 두 원 사이의 점접을 구하는 문제
}

function findAxisNum(r1,r2,d){ //실수로 작업을 하면 오차가 발생할 수 있다고 하지만(d에서 sqrt 사용)
    let sumR = (r1+r2);        //여기서는 일단 테스트결과 정상 작동함.
    let minusR = Math.abs((r1-r2));
    if(minusR < d && d < sumR){ //두원이 적당히 겹침
        return 2;
    } else if(d === sumR){ //외접
        return 1;
    } else if(d === minusR && d !== 0){ //d !== 0 이라는 조건이 빠져서 삽질함.
        return 1;   //내접
    } else if(d < minusR){ //완전히 안에 들어감
        return 0;
    } else if(d > sumR){ //아에 떨어져있음
        return 0;
    } else if(d === 0 && r1 === r2){ //두원의 정점이 일치하고 반지름 같음(두원 완벽히 겹침)
        return -1;
    }
}