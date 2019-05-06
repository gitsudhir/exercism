export function sumOfMultiples(mul, num) {
    let sum = 0
    for (let i = 0; i < num; i += 1) {
        for (let rem of mul) {
            if (i % rem == 0) { sum += i; break; }
        }
    }
    return sum;

}