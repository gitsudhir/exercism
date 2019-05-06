
// //var bin = [1,0,1,0,1,0]
// //bin.map( (base,index) => base *(2** (bin.length - index -1) ) ).reduce((a,b)=>a+b,0)
// // 

// // function num(n=42){
// // for(;n;n= parseInt(n/3)){
// // console.log(n%3);  
// // }

// // }
// // num();
// function convert(inputArray,fromBase,toBase){
// var decimal = inputArray.map( (base,index) => base *(fromBase** (inputArray.length - index -1) ) ).reduce((a,b)=>a+b,0)
// var outputArray =[] 
// for(;decimal;decimal= parseInt(decimal/toBase)){
//   //console.log(decimal%toBase);  
//   outputArray.push(decimal%toBase);  
//   }
// console.log(outputArray.reverse())
// }
// convert([0], 10, 2)
/*
function annotate(input) {

  var arrayOf2D = []//[[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  for (let val of input) {
    console.log('vvv', val);
    arrayOf2D.push(val.split(''))
  }
  console.log('2d', arrayOf2D)

  for (let arraOf1D of arrayOf2D) {
    // console.log(...arraOf1D);
    for (let num of arraOf1D) {
      //console.log(num%2==0? num :0 )
      if (num != '*') {
        arrayOf2D[arrayOf2D.indexOf(arraOf1D)][arraOf1D.indexOf(num)] = neighbour(arrayOf2D, arrayOf2D.indexOf(arraOf1D), arraOf1D.indexOf(num)) //console.log(arrayOf2D[2][0])// console.log(arraOf1D.indexOf(num),'+',arrayOf2D.indexOf(arraOf1D))
        // console.log(num);
      }
    }
  }


  ////
  var output = []
  for (let arraOf1D of arrayOf2D) {
    //  console.log('hi')
    // console.log(...arraOf1D);
    //console.log(ar)
    output.push(arraOf1D.join(''));
  }
  for (let o of output) {
    console.log(...o);
  }

  function neighbour(arrayOf2D, row, col) {
    var arrayOfNeighbour = [];
    arrayOfNeighbour.push(tryCatch(arrayOf2D, (row - 1), (col - 1)));
    arrayOfNeighbour.push(tryCatch(arrayOf2D, (row - 1), (col)));
    arrayOfNeighbour.push(tryCatch(arrayOf2D, (row - 1), (col + 1)));
    arrayOfNeighbour.push(tryCatch(arrayOf2D, (row), (col - 1)));
    arrayOfNeighbour.push(tryCatch(arrayOf2D, (row), (col + 1)));
    arrayOfNeighbour.push(tryCatch(arrayOf2D, (row + 1), (col - 1)));
    arrayOfNeighbour.push(tryCatch(arrayOf2D, (row + 1), (col)));
    arrayOfNeighbour.push(tryCatch(arrayOf2D, (row + 1), (col + 1)));

    console.log(arrayOfNeighbour);
    arrayOfNeighbour = arrayOfNeighbour.filter(num => num =="*")
    console.log(arrayOfNeighbour);
    return arrayOfNeighbour.length == 0 ? ' ' : arrayOfNeighbour.length;
  }
}

const input = [
  ' *  * ',
  '  *   ',
  '    * ',
  '   * *',
  ' *  * ',
  '      ',
];
annotate(input)

function tryCatch(arrayOf2D,row, col) {
  console.log('from tryC', arrayOf2D)
  try {
    console.log('****', arrayOf2D[row][col])
    return arrayOf2D[row][col]
  } catch (e) {
    return undefined;
  }
}



function QueenAttack(board = { white: [3, 7], black: [6, 1] }) {
  this.white = board.white,
    this.black = board.black
  try { 1 } finally {
    if (this.white[0] == this.black[0] && this.white[1] == this.black[1]) {
      throw new Error('Queens cannot share the same space');
    }
  }
  this.toString = () => {
    let startBoard = []
    for (let i = 0; i < 8; i++) {
      startBoard.push((new Array(8).fill('_')))
    }
    startBoard[this.white[0]][this.white[1]] = 'W'
    startBoard[this.black[0]][this.black[1]] = 'B'
    var output = []
    for (let data of startBoard) {
      output.push(data.join(' '));
    }
    return output.join('\n');
  }
}

let queen = new QueenAttack({ white: [7, 7], black: [0, 0] });
console.log('white', queen.white)
console.log('black', queen.black)
queen.toString()
*

function perfect(number) {
  let sum = 1;
  for (let num = 2; num * 2 <= number; num += 1) {
    if (number % num == 0) {
      sum += num;
    }
  }
  console.log('per', sum);
}

perfect(28)
perfect(496)
perfect(8num8)


function seive() {
  let arrOfnumber = []
  //2 t0 210

  for (let n = 2; n <= 210; n += 1) {
    arrOfnumber.push(n)
  }
  let i = 0
  do {
    arrOfnumber = arrOfnumber.filter(num => num == arrOfnumber[i] || num % arrOfnumber[i])
  } while (arrOfnumber[i++] < Math.sqrt(210));
  console.log(arrOfnumber);
}
seive()
function primefactor(number = 60) {
  let num = 2;
  do {
    if (number % num == 0) {
        console.log(num)
      number = parseInt(number / num)
    } else {
      num += 1
    }
  } while (num <= number);
}

primefactor()/
function cutter(n = num) {
  let count = 0 
  do {
    count+=1
    if (n % 2 == 0) {
      n = parseInt(n / 2)
    } else {
      n = 3 * n + 1
    }
  } while (n != 1);
  console.log('count= ',count)
}

cutter();
*

function c(n, k) {
  //console.log('pascle triang', n, k)
  k = k < n - k ? k : n - k;
  let upper = 1;
  let lower = 1;
  for (; k>0; k -= 1, n -= 1) {
    upper *= (n)
    lower *= (k)
  }
  let ans = upper / lower;
  return ans;
  // console.log('ans ', ans);
}
// //c(5, 5)
// let n=4;
// for (let i = 0; i <= n; i += 1) {
//  let temp = ''
//  temp = spaces(n-i);
//   for (let j = 0; j <= i; j += 1) {
//    temp+= (' '+ c(i, j) );
//   }
//   console.log(temp);
// }
// function spaces(n){
//   return ' '.repeat(n);
// }
let n=0;
let temp = []
for (let j = 0; j <= n; j += 1) {
  temp.push(c(n, j));
}
console.log(temp);

/
function rightNumber(num) {
  let needZeros = num.length % 3;
  // console.log('nz', needZeros)
  num = (needZeros == 0 ? '' : (needZeros == 1 ? '00' : '0')) + num
  console.log(num)
  let v = ('' + num).match(/\d{1,3}/g)
  console.log(v)
  return v;
}

let number1To20 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
let numberTen = [' ', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

let inEnglish100th = ['', 'thousand', 'million', 'billion', 'trillion']
var output = ''
var numArray = rightNumber('' + 310);

let length = numArray.length;
numArray.forEach((num, index) => {
  output += countInEnglish('' + num)// + ' ' + inEnglish100th[length - index - 1];
})
console.log(output)

function countInEnglish([...num]) {
  let inEnglish = ''
  if (+num[0]) {
    inEnglish += ' ' + number1To20[+num[0]] + ' hundred'
  }
  if (num[1] == 1) {
    inEnglish += ' ' + number1To20[+('' + num[1] + num[2])]
  }
  if (num[1] == 0 && num[2] != 0) {
    inEnglish += ' ' + number1To20[+('' + num[2])]
  }

  if (num[1] >= 2) {
    inEnglish += ' ' + numberTen[+num[1]]
    if (+num[2] != 0) inEnglish += '-' + number1To20[+num[2]]/////////////
  }

  return inEnglish;

}
*
function LCM(a, b) {
  for (let i = 1; i++;) {
    if (a * i % b == 0) return a * i;
  }
}
console.log(LCM(18, 27))

var sim = simplify(18, 27);
console.log(sim)

function simplify(nume, deno) {
  let gcd = (nume * deno) / LCM(nume, deno)
  return { nume: nume / gcd, deno: deno / gcd }
}
*/

// function largestProduct(str, num) {
//   let find = maxFind(str);
//   let output = []
//   for (let i = 0; i < num; i += 1) {
//     let dotArray = new Array(num).fill('.')
//     dotArray[i] = find;
//     let pattern = dotArray.join('')
//     // console.log(pattern)
//     let reg = new RegExp(pattern, 'gi')
//     output.push('' + (str.match(reg) || 0))
//   }
//   output = output.map((val) => eval(('' + val).split('').join('*')))
//   return Math.max(...output)
// }
// var result = largestProduct('99099', 3);
// // result = result.map((val) => eval(('' + val).split('').join('*')))
// console.log(result)


// function maxFind(str) {
//   for (let i = 9; i >= 0; i = i - 1) {
//     if (str.indexOf(i) >= 0) return i;
//   }
// // }
// var num = 10;
// for (let a = 0; a < num; a += 1) {
//   for (let b = a + 1; b < num; b += 1) {
//     for (let c = b + 1; c < num; c += 1) {

//       if (a ** 2 + b ** 2 == c ** 2) {
//         console.log(a, b, c, num)
//       }
//     }
//   }
// }

// function Triplate() {

// }
// Triplate.where = function ({ maxfactor }) {
//   console.log(maxfactor);

// }
// new Triplate.where({ maxfactor: 62 })
//console.log('hi')
////////////////    LR            TB           RL          BT  */
// function spiral(num) {//square mattrix

//   let d2 = new Array(num).fill(new Array(num).fill(0))
//   var direction = [{ 'row': '0', 'col': '+' }, { 'row': '+', 'col': '0' }, { 'row': '0', 'col': '-' }, { 'row': '-', 'col': '0' }]

//   for (var i = 1, dir = 0, row = 0, col = 0; i <= 25; i++) {
//     d2[row][col] = i;
//     // dir = i%4
//    // console.log('col',direction[dir])
//     try {
//       if (direction[dir]) {
//        // console.log('col',direction[dir])
//         direction[dir].col == '+' ? col += 1 : '';
//         direction[dir].col == '-' ? col -= 1 : '';
//       }
//       if (direction[dir]) {
//        // console.log('row',direction[dir])
//         direction[dir].row == '+' ? row += 1 : ''
//         direction[dir].row == '-' ? row -= 1 : ''
//       }
//     } catch (err) {
//       console.log('ree', err)
//     }

//     let temp = (dir) => {
//       try {
//         if (d2[row][col] == 0) return (dir) % 3;
//         if (d2[row][col] != 0) return (dir + 1) % 3;
//       } catch (err) {
//         return (dir + 1) % 3;
//       }
//     }
//     dir = temp % 3  
//   }

//   for (let row of d2) {
//     console.log(row);
//   }
// }

// spiral(5);

// function isPangram(str) {
//   str = '' + str
//   str.toLowerCase()
//       .replace(/\d+/gi, '')
//       .replace(/_/gi, '')
//       .replace(/\s/gi, '')
//   var sett = new Set([...str]);
//   console.log(('' + [...sett]).replace(/(,|\s)/gi, ''))
//   return ('' + [...sett]).replace(/,/gi, '') == 'abcdefghijklmnopqrstuvwxyz'
// }


// console.log(isPangram('the_quick_brown_fox_jumps_over_the_lazy_dog'))


// xtest('accumulate squares', () => {
//   const accumulator = number => number * number;
//   const result = accumulate([1, 2, 3], accumulator);
//   expect(result).toEqual([1, 4, 9]);
// });
// function accumulate(arrOfnumber, accumulator) {
//   for (let index in arrOfnumber) {
//     arrOfnumber[index] = accumulator(arrOfnumber[index])
//     // console.log(arr)
//   }
//   // console.log(accumulator)
//   console.log(arrOfnumber)
// }
// const accumulator = number => number * number;
// const result = accumulate([1, 2, 3], accumulator);
//  function bracket(str){
//   str = str.replace(/\(\)/gi,'')
//            .replace(/\{\}/gi,'')
//            .replace(/\[\]/gi,'')

//   return str.length == 0
// }

// console.log(bracket('[]()[{()}]'))

// function calculate(arrCoins, num) {
//   console.log(arrCoins)
//   console.log(num)
//   if (num == 0) return []
//   let min = 9999;
//   let org = num;
//   let output = []
//   let j = arrCoins.length - 1
//   for (; j >= 0; j -= 1) {
//    let i = j
//     if (num != 0) {
//       console.log(output)
//       console.log('num', num); break
//     }
//     num = org
//     for (; num != 0;) {
//       if (num >= arrCoins[i]) {
//         output.unshift(arrCoins[i]);
//         num -= arrCoins[i];
//         console.log(num)
//       } else {
//         i -= 1
//       }

//     }
//     if (output.length < min && output.length != 0) {
//       var tem = []
//       tem = [...output]
//       min = output.length
//     } output = []
//     console.log(output)

//   }
//   console.log('temp', tem)
//   return tem;
// }
//console.log(calculate([1, 4, 15, 20, 50], 23))
//console.log(calculate([1, 5, 10, 21, 25], 63))
//console.log(calculate([2, 5, 10, 20, 50], 21))
// console.log(calculate([4, 5], 27))
//  console.log(calculate([1, 5, 10, 21, 25], 0))
//  console.log(calculate([1, 2, 5, 10, 20, 50, 100], 999))
/*
function transpose(input) {
  console.log(input.length)
  let Max = Math.max(...input.map(x => x.length))
  var temp = ''
  var output = []
  for (let i = 0; i < Max; i += 1) {
    for (let l = 0; l < input.length; l += 1) {
      temp += (input[l][i]||'')
    }
    output.push(temp)
    temp = ''
  }
  return output;
}
const input = ['The fourth line.', 'The fifth line.'];
for (let a of transpose(input)) {
  console.log(a)
}

const expected = ['TT', 'hh', 'ee', '  ', 'ff', 'oi', 'uf', 'rt', 'th', 'h ', ' l', 'li', 'in', 'ne', 'e.', '.'];
*//*
····0····
···1·1···
··2···2··
·3·····3·
4·······4
·3·····3·
··2···2··
···1·1···
····0····

*/
//var output = []
function charPattern(char) {
  let output = []
  let limit = char.charCodeAt(0) - 65
  for (let i = 0; i <= limit; i++) {
    let temp = ''
    for (let j = limit - i; j; j--) {
      temp += ' '
    }
    temp += String.fromCharCode(65 + i);
    (i == 0 ? '' : (temp += (' '.repeat(2 * i - 1)), temp += String.fromCharCode(65 + i)))
    for (let j = limit - i; j; j--) {
      temp += ' '
    }
    console.log(temp)
    output.push(temp)

  }
  for (let l = output.length - 2; l >= 0; l--) {
    console.log(output[l])
  }
}

charPattern('E');