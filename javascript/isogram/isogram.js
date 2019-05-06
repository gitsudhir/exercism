export function isIsogram(str) {
    str = str.toLowerCase().replace(/[ -]/gi, '')
    return new Set([...str]).size == str.length
}