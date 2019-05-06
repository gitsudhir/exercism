function encode(word = "AAAABBCCCCDBBDD") {
    let newWord = '';
    let length = word.length;
    let start = 0, index = 0;
    let count = 0;
    while (index <= length) {
        if (word[start] === word[index]) {
            count++;

        } else {
            newWord += '' + (count === 1 ? '' : count) + word[start];
            count = 0;
            start = index;
            index -= 1;
        }
        index++;
    }
    return newWord;
}
function decode(word) {
    let newWord = '';
    let length = word.length;
    let start = 0, index = 0;
    let number = '';
    while (start < length) {
        if (/[0-9]/.test(word[start])) {
            number += word[start];
            if (/[0-9]/.test(word[start + 1])) {
                start += 1;
                continue;
            }
            number = + number;
            while (number--) {
                newWord += word[start + 1];
            }
            start += 2;
            number = '';
        } else {
            newWord += word[start];
            start += 1;
        }
    }
    return newWord;
}

module.exports = {
    encode,
    decode
}
