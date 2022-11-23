const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s=>s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s=>s.trim());
//let input = ['4','0 1 2 3','4 0 5 6','7 1 0 2','3 4 5 0'];

let N = parseInt(input[0]);
input.shift();
input = input.map(s => s.split(' ').map(Number));
//console.log(input,N);

let start = new Set();
let link = new Set(); //link는 start에 없는 모든 사람
for(let i=0; i<N; i++){
    link.add(i);
}
//let startScore = 0;
let min = null;
bt(0);
console.log(min);

function bt(index){
    if(start.size >= N/2){ //start의 사이즈가 n의 절반보다 많아진다면 (n의 절반이라면)
        //console.log(start,startScore);
        //let linkScore = 0;
        //let linkArr = new Set();
        //for(let i of link){
        //    linkScore += calScore(i,linkArr);
        //    linkArr.add(i);
        //}
        let linkScore = calcScore2(Array.from(link));
        let startScore = calcScore2(Array.from(start)); //각 점수 계산후
        if(min === null){ //가장 작으면 min 에 넣기
            min = Math.abs(startScore-linkScore);
        } else {
            min = Math.min(Math.abs(startScore-linkScore),min);
        }
        return;
    }
    for(let i=index; i<N; i++){ //한 index부터 N까지
        if(start.has(i)){continue;}//if start에 이미 있으면 패스
        //console.log(start,i);
        //아니면 start에 넣고 calScore해서 반영
        start.add(i);
        link.delete(i);
        //let scoreTemp = calScore(i,start);
        //startScore += scoreTemp;
        bt(i);
        start.delete(i);
        link.add(i);
        //startScore -= scoreTemp;
    }
}

function calScore(target,arr){
    let res = 0;
    for(let i of arr){
        res += input[target][i] + input[i][target];
    }
    return res;
}

function calcScore2(arr) { //이 계산 방식이 더 빠름
    let sum = 0;
  
    for(let j = 0; j < arr.length; j++) {
      for(let k = j + 1; k < arr.length; k++) {
        sum += input[arr[j]][arr[k]];
        sum += input[arr[k]][arr[j]];
      }
    }
    return sum;
  }