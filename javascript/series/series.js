//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(str) {
    // throw new Error("Remove this statement and implement this function");
    this.str = str;
  }

  get digits() {
    // throw new Error("Remove this statement and implement this function");
    return this.str.split('').map(x => +x)
  }

  slices(num) {
    if (this.str.length < num) {
      throw new Error('Slice size is too big.');
    }
    let out = []
    for (let start = 0; start <= this.str.length - num; start += 1) {
      let end = start + num;
      out.push(this.str.slice(start, end).split('').map(x => +x))
    }
    return out;
  }
}
