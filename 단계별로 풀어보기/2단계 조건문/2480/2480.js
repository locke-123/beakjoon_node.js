const fs = require('fs');
//let input = fs.readFileSync('example.txt').toString().split(' ');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
input = input.map(s => parseInt(s));

let [dice1, dice2, dice3] = input;
let reward;

if(dice1 === dice2 && dice2 === dice3){
    reward = 10000+dice1*1000;
} else if(dice1 === dice2){
    reward = 1000+dice1*100;
} else if(dice2 === dice3){
    reward = 1000+dice2*100;
} else if(dice3 === dice1){
    reward = 1000+dice3*100;
} else {
    let max = dice1;
    if(dice2 > max){
        max = dice2;
    }
    if(dice3 > max){
        max = dice3;
    }
    reward = max*100;
}

console.log(reward);