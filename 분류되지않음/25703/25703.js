const fs = require('fs');
let input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
//let input = parseInt(fs.readFileSync('example.txt').toString().trim());

console.log("int a;");
console.log("int *ptr = &a;");
if(input >= 2){
    console.log("int **ptr2 = &ptr;");
}
for(let i=3; i<=input; i++){
    console.log("int","*".repeat(i)+"ptr"+i,"=","&ptr"+(i-1)+";");
}