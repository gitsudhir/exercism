export function primeFactors(number) {
    let output = []
    let num = 2;
    do {
        if (number % num == 0) {
            output.push(num)
            number = parseInt(number / num)
        } else {
            num += 1
        }
    } while (num <= number);
    return output;
}