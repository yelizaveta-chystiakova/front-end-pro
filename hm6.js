//1
function maxNumber(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

//2
function checkAge(age) {
    return age >= 18
}

//3
function cutString(string, maxlength) {
    if (string.length > maxlength) {
        return `${string.slice(0, maxlength)}...`;
    }

    return string;
}

//4
function checkWord(str, word) {
    return str.includes(word);
}
