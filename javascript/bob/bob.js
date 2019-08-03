/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  //
  // YOUR CODE GOES HERE
  //
  message= message.trimEnd();
  if ((/\?$/).test(message)) {
    if ((/\?$/).test(message) && (/[A-Z]\?$/).test(message)) {
      return 'Calm down, I know what I\'m doing!'
    }
    return 'Sure.'
  }
  if ((/\.$/).test(message)) {
    return 'Whatever.'
  }
  if ((/!$/).test(message)) {
    return 'Whoa, chill out!'
  }
  if ((/[^A-Za-z]$/).test(message)) {
    return 'Fine. Be that way!'
  }
  return 'Whatever.'
};
