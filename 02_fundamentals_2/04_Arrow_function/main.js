// arrow funciton
birthYear = 2001;

const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  // return retirement
  return `${firstName} retires in ${retirement} years.`;
};

// in the array function, if the code block is of one line, then we can omit the 'return keyword as well as paranthesis but if it is more than one line say multiple line then we need ot add return keyword as well as a bracket.'

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(2001, "ankit"));
