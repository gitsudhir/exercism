export function accumulate(arrOfnumber, accumulator) {
    for (let index in arrOfnumber) {
        arrOfnumber[index] = accumulator(arrOfnumber[index])
    }
    return arrOfnumber
}