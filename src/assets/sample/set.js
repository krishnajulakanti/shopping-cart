let dupArray = [1, 4, 4, 2, 3, 3, 6, 6, 5];
let dupString = "abccekkmootsp";

let uniqueSet = new Set(dupArray);
// console.log(uniqueSet, "Unique set"); // Set(6) { 1, 4, 2, 3, 6, 5 } Unique set

let uniqueArray = Array.from(uniqueSet);
// console.log(uniqueArray, "Unique array"); // [ 1, 4, 2, 3, 6, 5 ] Unique array

let uniqueStringSet = new Set(dupString);
// console.log(uniqueStringSet, "Unique string set"); // Set(10) { 'a', 'b', 'c', 'e', 'k', 'm', 'o', 't', 's', 'p' } Unique string set

let uniqueStringArray = Array.from(uniqueStringSet);
// console.log(uniqueStringArray, "Unique string array"); // ['a', 'b', 'c', 'e', 'k', 'm', 'o', 't', 's', 'p'] Unique string
// console.log(uniqueString.join(''), "Unique string"); // abcekmotsp Unique string


// To find Duplicate numbers
let seen = new Set();

const duplicates = [];

dupArray.forEach(item => {
  if (seen.has(item)) {
    duplicates.push(item)
  } else {
    seen.add(item)
  }
})

// console.log(duplicates, "duplicates");
// console.log(duplicates.sort((a, b) => a - b));

// To find First repetitive char in a string

let seenString = new Set();
const repetitiveChars = [];

dupString.split('').forEach(char => {
  if (seenString.has(char)) {
    repetitiveChars.push(char)
  } else {
    seenString.add(char)
  }
})

console.log(repetitiveChars[0], "Repetitive Chars");
