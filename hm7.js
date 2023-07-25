
//1
const maxNumber = (a, b) => a > b ? a : b;

//2
const checkAge = (age) => age >= 18;

//3
const cutString = (string, maxlength) => (
    string.length > maxlength ? `${string.slice(0, maxlength)}...` : string
);

//4
const checkWord = (str, word) => str.includes(word);