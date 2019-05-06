export function Change(){

}
Change.prototype.calculate= function (arrCoins, num) {
   // console.log(arrCoins)
   // console.log(num)
    if (num == 0) return []
    let min = 9999;
    let org = num;
    let output = []
    let j = arrCoins.length - 1
    for (; j >= 0; j -= 1) {
     let i = j
      
      num = org
      for (;(j!=0&& num != 0);) {
        if (num >= arrCoins[i]) {
          output.unshift(arrCoins[i]);
          num -= arrCoins[i];
      //    console.log(num)
        } else {
          i -= 1
        }
  
      }
      if (output.length < min && output.length != 0) {
        var tem = []
        tem = [...output]
        min = output.length
      } output = []
      //console.log(output)
  
    }
    //console.log('temp', tem)
    return tem;
  }