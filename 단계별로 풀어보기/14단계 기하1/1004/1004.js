const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let T = parseInt(input[0]); input.shift();
for(let i=0; i<input.length; i++){
    let [x1,y1,x2,y2] = input[i].split(' ').map(Number); i++; //i++만큼 배열을 순환
    //console.log(x1,y1,x2,y2);
    let n = parseInt(input[i]); i++;
    //console.log(n);
    let count = 0; //결과값
    for(let j=i; j<i+n; j++){ //각 원에 따른 조건 검사
        let [cx, cy, r] = input[j].split(' ').map(Number);
        //console.log(cx,cy,r);
        let d1 = (x1 - cx)**2 + (y1 - cy)**2; //원 중점에서 부터 출발지 까지 거리
        let d2 = (x2 - cx)**2 + (y2 - cy)**2; //원 중점에서 부터 도착지 까지 거리
        //* 소수점 오차 제거위해 제곱의 형태로 비교
        if(r**2 > d1 && r**2 < d2){
            //원이 반지름이 도착지나 출발지와의 거리보다 커야
            //원의 내부에 출발지나 도착지가 존재하는 것.
            // 단, 출발지나 도착지중 하나만 원안에 존재해야함. 둘다 존재하면 카운트 X
            count++;
        } else if(r**2 > d2 && r**2 < d1) {
            count++;
        }
    }
    console.log(count);
    i = i+n-1;
}