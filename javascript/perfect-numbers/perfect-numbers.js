export function classify (number){
    if(number <= 0 ) throw new Error('Classification is only possible for natural numbers.')
    if(number == 1 ) return 'deficient'
    let sum = 1;
    for (let num = 2; num * 2 <= number; num += 1) {
      if (number % num == 0) {
        sum += num;
      }
    }
    if(sum == number) return 'perfect' ;
    if(sum< number) return 'deficient'
    return 'abundant' ;
}