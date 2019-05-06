export function Rational(numerator, denominator) {
    this.numerator = numerator < 0 && denominator < 0 ? Math.abs(numerator) : (denominator < 0 ? -numerator : numerator);
    this.denominator = Math.abs(denominator)
}
Rational.prototype.add = function add({ numerator, denominator }) {
    if (this.denominator == denominator) return new Rational(this.numerator + numerator, denominator)
    let lcm = LCM(this.denominator, denominator)
    return new Rational(this.numerator * (lcm / this.denominator) + numerator * (lcm / denominator), lcm)
}
Rational.prototype.sub = function sub({ numerator, denominator }) {
    return this.add(new Rational(-numerator, denominator))
}
Rational.prototype.mul = function mul({ numerator, denominator }) {
    let { nume, deno } = simplify(this.numerator * numerator, this.denominator * denominator)
    return new Rational(nume, deno)
}
Rational.prototype.div = function div({ numerator, denominator }) {
    return this.mul(new Rational(denominator, numerator))
}
Rational.prototype.abs = function abs() {
    return (new Rational(Math.abs(this.numerator), Math.abs(this.denominator)))
}
Rational.prototype.exprational = function exprational(power) {
    return (new Rational((this.numerator ** power), (this.denominator ** power)))
}
Rational.prototype.reduce = function reduce() {
    let { nume, deno } = simplify(this.numerator, this.denominator)
    return new Rational(nume, deno)
}
function LCM(a, b) {
    a = Math.min(Math.abs(a), Math.abs(b))
    b = Math.max(Math.abs(a), Math.abs(b))
    for (let i = 1; i++;) {
        if (a * i % b == 0) return a * i;
    }
}
function simplify(nume, deno) {
    if (nume == 0) return { nume: 0, deno: 1 }
    if (nume == deno && nume != 0) return { nume: 1, deno: 1 }
    let gcd = (nume * deno) / LCM(nume, deno)
    return { nume: nume / gcd, deno: deno / gcd }
}