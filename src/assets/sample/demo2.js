function firstRepetitiveChar(str) {
  const seen = new Set(); // To track characters that have been seen

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (seen.has(char)) {
      return char;  // Return the first repetitive character
    }
    seen.add(char);  // Add the character to the set
  }

  return null;  // If no repetitive character found
}

// Example usage:
const str = "abca";
const result = firstRepetitiveChar(str);
console.log(result);  // Output: "a"



// function firstRepetitiveChar(str) {
//   const charCount = {}; // Object to store character counts

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     // If the character is already in the object, it's a repetitive character
//     if (charCount[char]) {
//       return char;
//     }

//     // Otherwise, mark it as seen
//     charCount[char] = 1;
//   }

//   return null;  // If no repetitive character found
// }

// // Example usage:
// const str = "abcab";
// const result = firstRepetitiveChar(str);
// console.log(result);  // Output: "a"
