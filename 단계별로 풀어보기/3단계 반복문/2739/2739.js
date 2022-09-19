const fs = require('fs');
//let input = parseInt(fs.readFileSync('example.txt').toString());
let input = parseInt(fs.readFileSync('/dev/stdin').toString());

for(let i=1;i <10;i++){
    console.log(input,"*",i,"=",input*i);
}