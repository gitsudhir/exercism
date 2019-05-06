export function Diamond() { }
Diamond.prototype.makeDiamond = function (char) {
    let output = []
    let final = []
    let limit = char.charCodeAt(0) - 65
    for (let i = 0; i <= limit; i++) {
        let temp = ''
        for (let j = limit - i; j; j--) {
            temp += ' '
        }
        temp += String.fromCharCode(65 + i);
        (i == 0 ? '' : (temp += (' '.repeat(2 * i - 1)), temp += String.fromCharCode(65 + i)))
        for (let j = limit - i; j; j--) {
            temp += ' '
        }
        final.push(temp)
        output.push(temp)
    }
    for (let l = output.length - 2; l >= 0; l--) {
        final.push(output[l])
    }
    return `${final.join('\n')}\n`;
}