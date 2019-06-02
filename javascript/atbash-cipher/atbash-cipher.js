export function encode(inputString) {
    inputString = inputString.toLocaleLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/gi,'')
    return ([...inputString]).map(changeChar => (/\d/).test(changeChar) ? changeChar : String.fromCharCode(122 - (changeChar.charCodeAt() - 97))).join('').match(/\w{1,5}/gi).join(' ')
}