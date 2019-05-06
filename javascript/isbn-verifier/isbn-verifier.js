export function ISBN(str) {
    this.str = str
}
ISBN.prototype.isValid = function () {
    let str = this.str;
    let temp = ([...str.match(/\d+/g).join('')]).map((value, index) => value * (10 - index)).reduce((a, b) => a + b, 0)
    if ((/X$/g).test(str)) {
        (temp += 10)
    }
    return temp % 11 == 0
}