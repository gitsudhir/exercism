//
// This is only a SKELETON file for the 'etl' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  // throw new Error("Remove this statement and implement this function");
  let out = {};
  Object.entries(old).forEach(entry => {
    entry[1].forEach(val => {
      out[val.toLowerCase()] = +entry[0];
    })
  })

  return out;


};
