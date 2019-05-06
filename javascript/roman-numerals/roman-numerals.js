
export function toRoman(num) {
    var listOfNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var listOfRoman = ['M', 'CM', 'D', 'CD', "C", 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

    var numToRoman = '';
    for (let i = 0; i < listOfNum.length; i++) {
        while (num >= listOfNum[i]) {
            numToRoman += listOfRoman[i];
            num -= listOfNum[i];
        }
    }
    return numToRoman;
}
