export function primes(number) {
    let arrOfnumber = []
    for (let n = 2; n <= number; n += 1) {
        arrOfnumber.push(n)
    }
    let i = 0
    do {
        arrOfnumber = arrOfnumber.filter(num => num == arrOfnumber[i] || num % arrOfnumber[i])
    } while (arrOfnumber[i++] < Math.sqrt(number));
    return (arrOfnumber);
}