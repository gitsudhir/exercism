export function keep(array, functionOfStrain) {
    return array.filter(functionOfStrain);
}
export function discard(array, functionOfStrain) {
    return array.filter(e => !functionOfStrain(e));
}