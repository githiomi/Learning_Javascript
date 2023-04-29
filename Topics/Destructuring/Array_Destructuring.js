// DESTRUCTURING
console.log("==== ARRAY DESTRUCTURING ====")
// This refers to act of 'breaking down' an array and convert it into smaller elements/variables

const alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F'
];

const numberArray = [
    1, 2, 3, 4, 5, 6
]

// This is used to get elements/variables from an array
// Conventional way
const firstLetter = alphabet[0]; // To return the first element "A"

// Using destructuring
const [a, b, c] = alphabet;
// This will remove elements/variables from the array in the same order as it is written
console.log(a);
console.log(b);
console.log(c);
// The above logs will print out:
// A
// B
// C

// If we wanted to print out the remaining elements from the array in one array, we use the SPREAD OPERATOR
const [first, second, ...rest] = alphabet;
// Printing out the 'rest' will print out all the elements in the array except the first and second elements
console.log(first);
console.log(second);
console.log(rest);


// We can also combine multiple arrays together using the SPREAD OPERATOR
const newArray = [...alphabet, ...numberArray];
console.log(newArray);

// But note that combining array can also be done using the 'concat()' operator
const concatedArray = alphabet.concat(numberArray);
console.log(concatedArray);

// Functions can also return more than one parameter
function sumAndMulitply(num1, num2) {
    // return [num1 + num2, num1 * num2];
    return [num1+ num2, num1 * num2, num2 / num1];
    // This will return an array which has the sum in the first index and the multitplication in the second index
}

console.log(sumAndMulitply(5, 10));

// We can also access the sum and multiplication values directly using DESTRUCTURING
// Because we know the sum is in index one and the multiplication is in index two
// Deconstruction can also have optional parameters that will evaluate to the default value if not overridden
const [sum, product, division = 'No Division'] = sumAndMulitply(5, 10);
console.log(sum);
console.log(product);
console.log(division); // This will print out 2 {10/5} if the operation is passed or print 'No Division' otherwise