export function annotate(input) {
    var arrayOf2D = []
    for (let val of input) {
        arrayOf2D.push(val.split(''))
    }
    for (let arraOf1D of arrayOf2D) {
        for (let num of arraOf1D) {
            if (num !== '*') {
                arrayOf2D[arrayOf2D.indexOf(arraOf1D)][arraOf1D.indexOf(num)] = neighbour(arrayOf2D, arrayOf2D.indexOf(arraOf1D), arraOf1D.indexOf(num))
            }
        }
    }
    var output = []
    for (let arraOf1D of arrayOf2D) {
        output.push(arraOf1D.join(''));
    }
    return output;
}

function neighbour(arrayOf2D, row, col) {
    var arrayOfNeighbour = [];
    arrayOfNeighbour.push(tryCatch(arrayOf2D, (row - 1), (col - 1)));
    arrayOfNeighbour.push(tryCatch(arrayOf2D, (row - 1), (col)));
    arrayOfNeighbour.push(tryCatch(arrayOf2D, (row - 1), (col + 1)));
    arrayOfNeighbour.push(tryCatch(arrayOf2D, (row), (col - 1)));
    arrayOfNeighbour.push(tryCatch(arrayOf2D, (row), (col + 1)));
    arrayOfNeighbour.push(tryCatch(arrayOf2D, (row + 1), (col - 1)));
    arrayOfNeighbour.push(tryCatch(arrayOf2D, (row + 1), (col)));
    arrayOfNeighbour.push(tryCatch(arrayOf2D, (row + 1), (col + 1)));


    arrayOfNeighbour = arrayOfNeighbour.filter(num => num == '*')
    return arrayOfNeighbour.length === 0 ? ' ' : arrayOfNeighbour.length;
}


function tryCatch(arrayOf2D, row, col) {
    try {
        return arrayOf2D[row][col] === ' ' ? undefined : arrayOf2D[row][col]
    } catch (e) {
        return undefined;
    }
}