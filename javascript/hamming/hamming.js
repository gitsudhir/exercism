//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (DNA1, DNA2) => {
  // throw new Error("Remove this statement and implement this function");
  if (DNA1 == '' && DNA2 == '') return 0;
  if (DNA1 == '') {
    throw  'left strand must not be empty'
  }
  if (DNA2 =='') {
    throw 'right strand must not be empty'
  }
  if (DNA1.length != DNA2.length) {
    throw 'left and right strands must be of equal length'
  }

  let diff = 0;
  [...DNA1].forEach((val, index) => {
    if (val != DNA2[index]) {
      diff += 1
    }
  })

  return diff;
};
