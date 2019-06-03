export var RotationalCipher = {
    rotate: function (inputString, rotationTime) {
        return ([...inputString]).map(inputChar => (/[a-z]/gi).test(inputChar) ? (inputChar.toLocaleLowerCase().codePointAt() + rotationTime < 123 ? String.fromCharCode(inputChar.codePointAt() + rotationTime) : String.fromCharCode(inputChar.codePointAt() - (26 - rotationTime))) : inputChar).join('')
    }
}