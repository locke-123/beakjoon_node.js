const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().trim();
let input = fs.readFileSync('/dev/stdin').toString().trim();
//trim() 안붙여서 1시간 삽질... 문자열 다룰때는 무조건 trim 붙이기

let sum = 0;

for(let i=0;i<input.length;i++){
    if(input[i] === ' ') continue;
    if(input[i] === 'c'){
        if(input[i+1] === '='){
            sum++;
            i = i+1;
            continue;
        }
        if(input[i+1] === '-') {
            sum++;
            i = i+1;
            continue;
        }
    }

    if(input[i] === 'd'){
        if(input[i+1] === 'z'){
            if(input[i+2] === '='){
                sum++;
                i = i+2;
                continue;
            }
        }
        if(input[i+1] === '-') {
            sum++;
            i = i+1;
            continue;
        }
    }

    if(input[i] === 'l'){
        if(input[i+1] === 'j'){
            sum++;
            i = i+1;
            continue;
        }
    }

    if(input[i] === 'n'){
        if(input[i+1] === 'j'){
            sum++;
            i = i+1;
            continue;
        }
    }

    if(input[i] === 's'){
        if(input[i+1] === '='){
            sum++;
            i = i+1;
            continue;
        }
    }

    if(input[i] === 'z'){
        if(input[i+1] === '='){
            sum++;
            i = i+1;
            continue;
        }
    }
    sum++;
}

console.log(sum);