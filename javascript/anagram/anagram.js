//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Anagram {
  constructor(subject) {
    // throw new Error("Remove this statement and implement this function");
    this.subject = subject;
  }

  matches(subjectArray) {
    // throw new Error("Remove this statement and implement this function");
    let out = []
    subjectArray.forEach(element => {
      if (this.subject.length == element.length) {
        if ([...this.subject.toLowerCase()].sort().join('') == [...element.toLowerCase()].sort().join('') && this.subject.toLowerCase() != element.toLowerCase()) {
          out.push(element);
        }
      }
    });

    return out;
  }
}
