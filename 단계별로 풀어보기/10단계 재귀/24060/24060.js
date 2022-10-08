const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let [N,K] = input[0].split(' ').map(s => parseInt(s));
input.shift();
input = input[0].split(' ').map(s => parseInt(s));

//병합정렬 merge sort에 대해서 공부

let count = 0;
let ans = -1;
mergeSort(input, 0, input.length-1); //배열, 첫index, 마지막 index
console.log(ans);

function mergeSort(A,p,r){
    if(p < r) { //첫index보다 마지막index가 크면 실행 X
        let q = Math.floor((p+r)/2); //반으로 나눈 index q에 저장
        mergeSort(A, p, q); //첫 index부터 반까지 다시 sort
        mergeSort(A, q+1, r); //반보다 1 큰 index부터 마지막까지 sort
        merge(A, p, q, r); //다시 합치기
    }
}

function merge(A, p, q, r){ //합치는부분
    i = p;
    j = q+1;
    let t = 1;
    let tmp = [];
    while(i<= q && j<= r){ //p가 반보다 작거나 같고, r이 반보다1큰 index 보다 같거나 클때
        if(A[i] <= A[j]){//각 요소끼리 비교
            tmp[t++] = A[i++]; //임시로 정렬된 배열에 저장
        }
        else {
            tmp[t++] = A[j++]; //그리고 저장된 후 index 하나 증가
        }
    }
    while(i<= q) tmp[t++] = A[i++]; //만약 index가 증가되지 않은 것이 있으면 후속 처리
    while(j <= r) tmp[t++] = A[j++]; //동일
    i = p;
    t = 1;
    while(i <= r){ //본래 배열에 다시 정렬된 배열 할당
        count++;
        if(count === K){
            ans = tmp[t];
        }
        A[i++] = tmp[t++];
    }
}