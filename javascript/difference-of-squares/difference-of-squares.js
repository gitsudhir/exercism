export function Squares(num = 1) {
    this.squareOfSum = sumNatural(num)
    this.sumOfSquares = squareNatural(num)
    this.difference = sumNatural(num) - squareNatural(num)
}
function sumNatural(num) { return (((num * (num + 1)) / 2) ** 2) }
function squareNatural(num) { return (num * (num + 1) * (2 * num + 1)) / 6 }