export function isPangram(str) {
    str = str.toLowerCase().replace(/[\"\.\d+_ ]/gi, '')
    return new Set([...str]).size == 26 
}