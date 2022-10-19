const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());

let N = parseInt(input[0]);
let nArray = input[1].split(' ').map(Number); //자신이 가진 카드
let M = parseInt(input[2]);
let mArray = input[3].split(' ').map(Number); //있는지 확인할 카드

let sortednArray = [...nArray];
sortednArray.sort((a,b) => a-b); //자신이 가진 카드 정렬 버전

let ans = '';
for(let i=0; i<mArray.length; i++){ //있는지 확인할 카드 모두 확인
    ans += BinarySearch(mArray[i],0,nArray.length-1) + ' '; //이진탐색 활용
}
console.log(ans);

function BinarySearch(n,start,end) {
    if(start > end) { return 0;} //시작이 end보다 크면 없음
    let mid = Math.floor((start+end)/2); //mid는 start+end/2 의 floor
    
    if(sortednArray[mid] === n){ //만약 가운데가 찾으면 1 리턴
        return 1;
    } else if(sortednArray[mid] > n){ //만약 mid의 sortarray가 n보다 크면 n은 mid위치 보다 작으므로 start 부터 mid-1 탐색
        return BinarySearch(n,start,mid-1);
    } else { //반대면 n이 mid위치 보다 크단 이야기이므로 mid+1 부터 end까지 탐색
        return BinarySearch(n,mid+1,end);
    }
}