export function Triplet(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
}
Triplet.prototype.sum = function () {
    return this.a + this.b + this.c
}
Triplet.prototype.product = function () {
    return this.a * this.b * this.c
}
Triplet.prototype.isPythagorean = function () {
    return this.a ** 2 + this.b ** 2 == this.c ** 2
}
Triplet.where = function ({ minFactor = 0, maxFactor, sum }) {
    let outArray = [];
    var num = maxFactor;
    for (let a = minFactor; a <= num; a += 1) {
        for (let b = a + 1; b <= num; b += 1) {
            for (let c = b + 1; c <= num; c += 1) {
                if (a ** 2 + b ** 2 == c ** 2 && (sum == undefined ? true : sum == a + b + c)) {
                    outArray.push(new Triplet(a, b, c))
                }
            }
        }
    }
    return outArray;
}