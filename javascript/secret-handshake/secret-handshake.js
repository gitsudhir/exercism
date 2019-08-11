//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const secretHandshake = (number) => {
  if (isNaN(number)) {
    throw new Error('Handshake must be a number');
  }
  let numberToBinary = (number).toString(2);
  let len = numberToBinary.length;
  let out = []
  numberToBinary[len - 1] == 1 && out.push('wink')
  numberToBinary[len - 2] == 1 && out.push('double blink')
  numberToBinary[len - 3] == 1 && out.push('close your eyes')
  numberToBinary[len - 4] == 1 && out.push('jump')

  return number > 16 ? out.reverse() : out;
};
