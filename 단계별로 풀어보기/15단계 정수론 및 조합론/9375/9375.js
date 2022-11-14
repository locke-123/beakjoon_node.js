const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s=>s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s=>s.trim());
let T = parseInt(input[0]);
let ans = '';
for(let i=1; i<input.length; i++){
    let n = parseInt(input[i]);
    let map = new Map(); //map으로 중복 체크
    for(let j=i+1; j<=i+n; j++){
        //console.log(input[j]);
        let category = input[j].split(' ')[1]; //뒷부분만 가져오기
        if(map.has(category)){
            map.set(category,map.get(category)+1);//각 map에 카테고리 넣기 + 존재시 +1
        } else {
            map.set(category, 1); //존재하지 않을시 1 할당
        }
        //console.log(map);
    }
    let arr = [];
    for(let i of map){ //맵에 해당하는 카운팅 숫자를 arr에 넣기
        arr.push(i[1]);
    }
    //console.log(arr);
    let count = 1;
    for(let i of arr){ //경우의 수 계산
        count *= (i+1);
    }
    count--;
    ans += count +'\n';
    i = i+n;
}
console.log(ans);


/*
hat  turban  hat        turban
             sunglds  sunglas       sunglas
5가지

(2+1) * (1+1) -1 = 5

hat1  hat2  hat3  sun1  sun2 |  hat1,sun1   hat1,sun2
hat2,sun1  hat2,sun2   hat3,sun1  hat3,sun2
11가지

(hat 입는경우수 + 안입는 경우수) * (eye 입는 경우수 + 안입는 경우수) - (모두안입는경우수)
(3+1) * (2+1) -1 = 11;
*/