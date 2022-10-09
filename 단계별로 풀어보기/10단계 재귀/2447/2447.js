const fs = require('fs');
let input = parseInt(fs.readFileSync('example.txt').toString().trim());
console.log(input);
let ans = recursion(9);

function recursion (n) {
    let txt = [];
    if(n===1){
        txt.push('*');
        txt.push('*');
        return txt;
    }
    let txt2 = [];
    txt = recursion(n/3);
    txt2.push(txt[0].repeat(3));
    txt2.push(txt[1].repeat(n/3)+' '.repeat(n/3)+txt[1].repeat(n/3));
    console.log(txt2,n);
    return txt2;
}
console.log(ans);