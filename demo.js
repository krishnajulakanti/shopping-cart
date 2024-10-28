// Reverse a string

let normalString = 'abcde';
let normalString1 = 'hello world';

let reversedStr = normalString1.split('').reverse().join('');

// console.log(reversedStr);

// FInd second largest number

let intArray = [1, 5, 4, 2, 9, 8, 7, 3];

let desOrder = intArray.sort((a, b) => (b - a));

// console.log(desOrder[1]);

const employee = {
  name: 'John Doe',
  age: 30,
  position: 'Developer',
  salary: 60000
};

function transformEmployee({ age, position, salary }) {
  return {
    ...employee,
    salary: salary * 2,
    position: position.toUpperCase(),
    isSenior: age >= 30
  }
}

const updatedEmployee = transformEmployee(employee);
console.log(updatedEmployee);


