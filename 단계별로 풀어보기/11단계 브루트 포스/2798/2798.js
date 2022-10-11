const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(s => s.trim());
//let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s => s.trim());
let [N,M] = input[0].split(' ').map(s => parseInt(s));
input = input[1].split(' ').map(s => parseInt(s));

let ans = 0; //가장 큰 값

for(let i=0; i<input.length-2; i++){ //배열의 0부터 남은 원소가 2개 남을 때 까지
    for(let j=i+1; j<input.length-1;j++){ //i보다 1 큰 index부터 남은 원소가 1개 남을때 까지
        for(let k=j+1; k<input.length; k++){ //j보다 1 큰 index부터 끝까지
            let sum = input[i]+input[j]+input[k]; //합계산
            if(sum <= M && sum > ans){ //합이 M보다 작거나 같고,기존 ans보다 크다면
                ans = sum; //ans 갱신
            }
        }
    }
}
console.log(ans);

//5 6 7, 5 6 8, 5 6 9
//5 7 8, 5 7 9
//5 8 9

//6 7 8, 6 7 9
//6 8 9

//7 8 9