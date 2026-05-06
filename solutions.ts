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

// /**********************************/ //

//* Problem 3:

//? Define a union type StringOrNumber and create a function checkType that uses type guards to return "String" if the input is a string or "Number" if the input is a number.

type StringOrNumber = string | number;

const checkType = (input: StringOrNumber) => {
  if (typeof input === 'string') {
    return 'String';
  } else if (typeof input === 'number') {
    return 'Number';
  }
};

// /**********************************/ //

//* Problem 4:

//? Write a generic function getProperty that takes an object and a key, then returns the value of that key. Use constraints to ensure the key exists on the object.

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key];

// /**********************************/ //

//* Problem 5:

//? Define an interface Book with properties title, author, and publishedYear. Create a function toggleReadStatus that accepts a Book object and returns a new object with an added isRead property (boolean), defaulting to true.

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (obj: Book): object => {
  return { ...obj, isRead: true };
};
