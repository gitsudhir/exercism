export class BinarySearch {
    constructor(inputArray) {
        this.inputArray = inputArray;
    }
    get array() {
        for (var i = 0; i < this.inputArray.length - 1; i++) {
            if (this.inputArray[i] <= this.inputArray[i + 1]) continue;
            return undefined;
        }
        return true;
    }
    indexOf(num) {
        return binarySearch(this.inputArray, num, 0, this.inputArray.length) || -1
    }
}
function binarySearch(array, numToFind, low, high) {
    if (low > high) return -1;
    let mid = parseInt((low + high) / 2)
    if (array[mid] == numToFind) return mid;
    if (numToFind < array[mid]) return binarySearch(array, numToFind, 0, mid - 1)
    if (numToFind > array[mid]) return binarySearch(array, numToFind, mid + 1, high);
}