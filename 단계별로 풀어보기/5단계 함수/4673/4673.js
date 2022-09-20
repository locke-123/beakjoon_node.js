function d (n) {
    let num = n;
    let sum = 0;
    while(num>=1){
        sum += Math.floor(num%10); //각 자릿수 덧셈
        num = num/10; //자릿수 뒤로
    }
    sum = Math.floor(sum);
    return parseInt(sum+n);
}

let flag = undefined; //true = selfnum X | false = selfnum O

for(let i=1;i<10000;i++){
    flag = false;
    for(let j=1;j<10000;j++){
        if(i === d(j)) { //i가 모든 숫자에 대해 d(j)인지 확인
            flag = true; //존재한다면 self number 가 아님
            break;
        }
    }
    if(flag === false) { //self number일때만 출력
        console.log(i);
    }
}