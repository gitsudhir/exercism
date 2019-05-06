export function Triangle(n) {
    this.n = n - 1;
    this.rows = rowsFunction(this.n);
    this.lastRow = lastRowFunction(this.n);
}

function rowsFunction(n) {
    let rowsArray = []
    for (let i = 0; i <= n; i += 1) {
        let temp = []
        for (let j = 0; j <= i; j += 1) {
            temp.push(c(i, j));
        }
        rowsArray.push(temp);
    }
    return rowsArray;
}

function lastRowFunction(n) {
    let temp = []
    for (let j = 0; j <= n; j += 1) {
        temp.push(c(n, j));
    }
    return temp;
}

function c(n, k) {
    k = k < n - k ? k : n - k;
    let upper = 1, lower = 1;
    for (; k > 0; k -= 1, n -= 1) {
        upper *= (n)
        lower *= (k)
    }
    let ans = upper / lower;
    return ans;
}