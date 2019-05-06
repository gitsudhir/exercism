export function convert(inputArray, fromBase, toBase) {
    if ((/\./g).test('' + toBase)) throw new Error('Wrong output base');
    if ((/\./g).test('' + fromBase)) throw new Error('Wrong input base');
    if (fromBase == undefined) throw new Error('Wrong input base');
    if (toBase == undefined) throw new Error('Wrong output base');
    if (inputArray.length === 0 && fromBase > 1) throw new Error('Input has wrong format');
    if (inputArray.length === 1 && inputArray[0] == 0) return [0];
    if (inputArray.length >= 1 && inputArray[0] == 0) throw new Error('Input has wrong format');
    if (inputArray.some(v => v < 0)) throw new Error('Input has wrong format');
    if (fromBase <= 1) throw new Error('Wrong input base');
    if (toBase <= 1) throw new Error('Wrong output base');
    if (inputArray.some(v => v >= fromBase)) throw new Error('Input has wrong format');

    var decimal = inputArray.map((base, index) => base * (fromBase ** (inputArray.length - index - 1))).reduce((a, b) => a + b, 0)
    var outputArray = []
    for (; decimal; decimal = parseInt(decimal / toBase)) {
        outputArray.push(decimal % toBase);
    }
    return (outputArray.reverse())
}
