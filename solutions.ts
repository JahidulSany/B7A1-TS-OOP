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

// /**********************************/ //

//* Problem: 6:

//? Create a class Person with a name and age. Then, create a subclass Student that adds a grade property. Include a method getDetails in the Student class that returns a string with the student's name, age, and grade.

// Sample Output:
//* "Name: Alice, Age: 20, Grade: A";

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// /**********************************/ //

//* Problem 7:

//? Create a function getIntersection that takes two arrays of numbers and returns a new array containing only the elements that are present in both arrays.

const getIntersection = (
  arrOfNumbers1: number[],
  arrOfNumbers2: number[],
): number[] => {
  const newArrOfNumbers = arrOfNumbers1.filter((num) =>
    arrOfNumbers2.includes(num),
  );
  const set = new Set(newArrOfNumbers);
  return Array.from(set);
};

console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
