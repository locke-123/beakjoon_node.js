const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let ans = '';
for(let i=0; i<input.length; i++){
    let list = input[i].split(' ').map(Number);
    list.sort((a,b) => a-b); //오름차순으로 제공한다는 보장이 없으므로 정렬
    if(list[2] === 0 && list[1] === 0 && list[0] === 0) break; //0,0,0 일때 종료
    if(list[2]*list[2] === list[1]*list[1] + list[0]*list[0]){ //피타고라스 정리
        ans += 'right\n';
    } else {
        ans += 'wrong\n';
    }
}
console.log(ans);