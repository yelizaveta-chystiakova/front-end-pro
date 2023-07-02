const string = prompt('random string');
const maxlength = prompt('maximum string length');
let result; 

if(string.length > maxlength) {
    result = `${string.slice(0, maxlength)}...`;
} else {
    result = string;
}

console.log(result);
