export function Say() {
    this.inEnglish = (num) => say(num);
}
function say(num) {
    if (num < 0 || num > 999999999999) throw new Error('Number must be between 0 and 999,999,999,999.');
    let number1To20 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    let numberTen = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let inEnglish100th = ['', 'thousand', 'million', 'billion', 'trillion']
    var output = ''
    var numArray = rightNumber('' + num);
    let length = numArray.length;
    numArray.forEach((num, index) => {
        output += countInEnglish(num) + " " + (num != 0 ? inEnglish100th[length - index - 1] : '');
    })
    function countInEnglish([...num]) {
        let inEnglish = ''
        if (+num[0]) {
            inEnglish += ' ' + number1To20[+num[0]] + ' hundred'
        }
        if (num[1] == 1) {
            inEnglish += ' ' + number1To20[+('' + num[1] + num[2])]
        }
        if (num[1] == 0 && num[2] != 0) {
            inEnglish += '' + number1To20[+('' + num[2])]
        }
        if (num[1] >= 2) {
            inEnglish += ' ' + numberTen[+num[1]]
            if (+num[2]) inEnglish += '-' + number1To20[+num[2]]
        }
        return inEnglish;
    }
    return output.trim() || 'zero';
}
function rightNumber(num) {
    let needZeros = num.length % 3;
    num = (needZeros == 0 ? '' : (needZeros == 1 ? '00' : '0')) + num
    let v = ('' + num).match(/\d{1,3}/g)
    return v;
}

