export function transpose(input) {
    let Max = Math.max(...input.map(x => x.length))
    var temp = ''
    var output = []
    for (let i = 0; i < Max; i += 1) {
        for (let l = 0; l < input.length; l += 1) {
            temp += (input[l][i] || (input[l].length > (input[(l + 1)] || input[l - 1]).length ? '' : ' '))
        }
        output.push(temp)
        temp = ''
    }
    return output.join('').replace(/\s/,'').trim();

}