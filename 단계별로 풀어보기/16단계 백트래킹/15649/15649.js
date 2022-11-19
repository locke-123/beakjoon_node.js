const fs = require('fs');
let [N,M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
//let [N,M] = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number);
//console.log(N,M)
//1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열 길이=M
//당분간 자료구조-DFS..등-백트래킹까지 공부후 진행

let visited = []; //방문조건 여기서는 숫자 중복 체크용도
let res = []; //넣어놓은 수열
let ans = ''; //답
bt(0);
function bt(index){ //index는 의미없다.
    if(res.length === M){ //수열의 길이가 M이 되면 출력에 넣기
        ans += res.join(' ')+'\n';
    } else {
        for(let i=0; i<N; i++){ //모든 숫자 후보 탐색
            if(visited[i] === true) continue; //그중에 이미 탐색한 중복 숫자가 존재한다면 패스
            visited[i] = true; //아니라면 이 숫자를 방문한걸로 취급
            res.push(i+1); //동시에 수열에 넣기
            bt(i+1); //안에 넣은 숫자도 의미는 없지만 다음 검사할 인덱스를 나타냄    여기서 그 다음 숫자를 탐색하기
            res.pop(); //가장 밑 까지 다녀왔다면 수열에서 숫자 빼기
            visited[i] = false; //마찬가지로 방문 초기화 하고 다시 다른 숫자 살펴보기
        }
    }
}
console.log(ans);