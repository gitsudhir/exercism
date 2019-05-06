export function Flattener() {
}
Flattener.prototype.flatten = function (array) {
    if ((/\d+/g).test('' + array)) {
        return ('' + array).match(/(-| )?\d+/g).map(x => +x)
    }
    return []
}