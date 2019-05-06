export function parse(str) {
    return (str).replace(/'/g,'')
                .replace(/-/g,' ')
                .replace(/_/g,'')
                .match(/\w+/g)
                .map(str => str[0].toUpperCase())
                .reduce((a, b) => a + b, '')
}
