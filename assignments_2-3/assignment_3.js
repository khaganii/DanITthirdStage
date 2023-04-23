
console.log("This is answer of 3rd assignment ------ > " + createString("abcdef"));

function createString(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toUpperCase();
        for (let j = 0; j < i; j++) {
            char += str[i].toLowerCase();
        }
        result += char;
        if (i !== str.length - 1) {
            result += '-';
        }
    }
    return result;
}