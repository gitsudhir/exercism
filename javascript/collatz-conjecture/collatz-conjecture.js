export function steps(n) {
    if (n <= 0) throw new Error('Only positive numbers are allowed');
    let count = 0
    for (; n != 1;) {
        count += 1
        if (n % 2 == 0) {
            n = parseInt(n / 2)
        } else {
            n = 3 * n + 1
        }
    }
    return count
}