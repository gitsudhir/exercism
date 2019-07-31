//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (str) => {
  // throw new Error("Remove this statement and implement this function");
  return [...str].map(function (ele) {
    if (ele == 'G') return 'C';
    if (ele == 'C') return 'G';
    if (ele == 'T') return 'A';
    if (ele == 'A') return 'U';

  }).join('');
};