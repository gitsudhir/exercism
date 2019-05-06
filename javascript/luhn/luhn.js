export function Luhn(number) {
    this.number = number
}
Object.defineProperties(Luhn.prototype, {
    'valid': {
        //thanks jokernd
        get: function () {
            if (this.number == ' 0' || this.number == '0') return false;
            if ((/[a-z:£$]/gi).test(this.number)) return false;
            var val = this.number
                .split('')
                .reverse()
                .join('')
                .replace(/\s/g, '')
                .replace(/(\d)(\d)/g, (match, p1, p2) => (p2 * 2 > 9 ? p2 * 2 - 9 : p2 * 2) + p1)
                .split('')
                .join('+')
            return eval(val) % 10 == 0
        }
    }
})
