console.log("==== COUNTING VOWELS IN STRING ====");

// This is an example of a JS interview question that can be asked to count the number of vowels in a string
// There are 2 approaches:

// 1. Beginner -> Using for loops
const beginnerVowelCounter = (stringText) => {

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;

    for (let letter of stringText.toLowerCase()) {
        if (vowels.includes(letter)) counter++;
    }

    // for..in returns a list of keys on the object being iterated, whereas for..of returns a list of values of the numeric properties of the object being iterated.

    return counter;

}

// 2. Advanced level -> Using the reduce function
const advancedVowelCounter = (stringText) => {

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // First convert the string to lowercase
    // Then into an array using the split() function

    return stringText
                    .toLowerCase()
                    .split('')
                    .reduce((accumulator, letter) => vowels.includes(letter) ? accumulator + 1 : accumulator, 0);

}

console.log("Beginner Counter: ", beginnerVowelCounter("addgregwolanda"));
console.log("Advanced Counter: ", advancedVowelCounter("addgregwolanda"));