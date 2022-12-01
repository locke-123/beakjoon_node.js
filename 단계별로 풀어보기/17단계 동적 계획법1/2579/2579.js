const fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(s=>s.trim());
let N = parseInt(input[0]);

for(let i=2; i<input.length; i++){
    
}

/*
f(x) = x를 밟을때 OR 안밟을때
f(1) = 10                arr[1]
f(2) = 10 + 20           f(1) + arr[2]
f(3) = 10 + 15           f(1) + arr[3]
f(4) = 10 + 20 + 25      f(2) + arr[4]
f(5) = 10 + 20 + 25 + 10 f(4) + arr[5]
f(6) = 10 + 20 + 25 + 20 f(4) + arr[6]

f(x) = Math.max(f(x-2)+arr[x],f(x-1)+arr[x])
f(1) = 10
f(2) = 10 or 10+20 => 30     1이 max면 다음건 무조건 0
f(3) = 10 + 15 or 30 + 15 0선택 => 10+15 = 25
f(4) = 30 + 25 or 25 + 25 => 55
f(5) = 25 + 10 or 55 + 10 = > 65 1이 max이므로 다음건 0
f(6) = 55 + 20 or 65 + 20  0선택 => 55+20 = 75
*/