export const validate = (input) => {
    return ('' + input).split('').map((number) => {
        return (+number) ** ('' + input).length
    }).reduce((a, b) => a + b, 0) == input

}