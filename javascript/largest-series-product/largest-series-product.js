
export function largestProduct(str, num) {
    if ('' + str.length < num) throw (new Error('Slice size is too big.'));
    if (str == ''||num == 0) return 1
    if (+str == 0) return 0;
    if (isNaN(str) || num < 0) throw new Error('Invalid input.');
    let find = maxFind(str);
    let output = []
    for (let i = 0; i < num; i += 1) {
        let dotArray = new Array(num).fill('.')
        dotArray[i] = find;
        let pattern = dotArray.join('')
        let reg = new RegExp(pattern, 'gi')
        output.push('' + (str.match(reg) || 0))
    }
    output = output.map((val) => eval(('' + val).split('').join('*')))
    return Math.max(...output)
}
function maxFind(str) {
    for (let i = 9; i >= 0; i = i - 1) {
        if (str.indexOf(i) >= 0) return i;
    }
}