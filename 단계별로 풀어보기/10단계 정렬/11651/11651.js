const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().split('\n').map(s => s.trim());
let N = parseInt(input[0]);
input.shift();

let axis = function (x,y) { //객체를 정의해서 품
    this.x = x;
    this.y = y;
    this.sum = x+y;
}

let axisArray = [];
for(let i=0; i<N; i++){
    let [x,y] = input[i].split(' ').map(s => parseInt(s));
    axisArray.push(new axis(x,y)); //axis라는 객체로 배열에 할당
}
axisArray.sort(function(a,b) { //정렬 조건을 써놓음
    if(a.y === b.y){ //y가 같으면
        return a.x - b.x; //x비교
    } else {
        return a.y - b.y; //아니면 y비교
    }
});
let ans = '';
for(i of axisArray){
    ans += i.x+' '+i.y+'\n';
}
console.log(ans);