export function matchingBrackets(str) {
    do {
        str = str.replace(/\(\)/gi, '').replace(/\{\}/gi, '').replace(/\[\]/gi, '')
    } while ((/\(\)/gi).test(str) || (/\[\]/gi).test(str) || (/\{\}/gi).test(str));
    return str.length == 0
}