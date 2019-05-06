export function WordProblem(question) {
    this.question = question
}
WordProblem.prototype.answer = function () {
    if(!(/\d+/).test(this.question)){
        throw new ArgumentError()
    }
    let val = (this.question)
        .replace(/plus/gi, '+')
        .replace(/minus/gi, '-')
        .replace(/multiplied/gi, '*')
        .replace(/divided/gi, '/')
        .replace(/[a-z?]/gi, '')
    return eval(val)
}