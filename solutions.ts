//* Problem 1:

//? Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.

const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num) => num % 2 === 0);
};

// /**********************************/ //

//* Problem 2:

//?  Write a function reverseString that takes a string as input and returns the reversed version of that string.

const reverseString = (inputString: string): string =>
  inputString.split('').reverse().join('');
