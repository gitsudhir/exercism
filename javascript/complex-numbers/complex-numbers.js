export function ComplexNumber(real, imag) {
    this.real = real
    this.imag = imag
    this.abs = Math.hypot(real, imag)
}
ComplexNumber.prototype.add = function add({ real, imag }) {
    return new ComplexNumber(this.real + real, this.imag + imag)
}
ComplexNumber.prototype.sub = function sub({ real, imag }) {
    return new ComplexNumber(this.real - real, this.imag - imag)
}
ComplexNumber.prototype.mul = function mul({ real, imag }) {
    let tempReal = (this.real * real) - (this.imag * imag)
    let tempImag = (this.real * imag) + (this.imag * real)
    return new ComplexNumber(tempReal, tempImag)
}
ComplexNumber.prototype.div = function div({ real, imag }) {
    let upperReal = (this.real * real) - (this.imag * -imag)
    let upperImag = (this.real * -imag) + (this.imag * real)
    let lowerReal = real ** 2 + imag ** 2
    return new ComplexNumber(upperReal / lowerReal, upperImag / lowerReal)
}
Object.defineProperties(ComplexNumber.prototype, {
    'conj': {
        get: function () {
            //thanks jokernd
            return new ComplexNumber(this.real, this.imag * -1 || 0);
        }
    },
    'exp': {
        get: function () {
            //thanks jokernd
            let a = (Math.exp(this.real) * Math.cos(this.imag));
            let b = (Math.exp(this.real) * Math.sin(this.imag));
            return new ComplexNumber(a, b);
        }
    }
})