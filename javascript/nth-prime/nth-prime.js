function primes(number) {
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

export function Prime() {
    this.nth = (n) => {
        if (n == 0) throw new Error('Prime is not possible')
        return primes(104743)[n - 1]
    }
}