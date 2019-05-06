export function PhoneNumber(num) {
    this.num = num
}
PhoneNumber.prototype.number = function () {
    var val = this.num.replace(/^\+?1/g, '')
    if ((/\( [01]\d\d \)/g).test(val) || (/[01]\d\d/g).test(val)) return null;
    val = val.match(/\d/g).join('')
    return val.length == 10 ? val : null;
}