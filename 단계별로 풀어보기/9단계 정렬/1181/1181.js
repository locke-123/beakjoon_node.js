const { FORMERR } = require('dns');
const fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n').map(s => s.trim());
let N = parseInt(input[0]);
input.shift();
console.log(input,N);

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
for(let i of input){
    for(j in alphabet){
        console.log(i.includes(alphabet[j]),j);
        if(i.includes(alphabet[j])){
            i = i.replace(alphabet[j],j)
            console.log(i);
        }
    }
}