console.log("==== MOST COMMON STRING IN ARRAY OF STRING ====");

// This can be used as a JS interview question where one is asked to:
// define a function that takes an array of strings and returns the most common occuring string

// Algorithm:
// We create an object that will hold the string and number of occurrences in a key:value pair patter
/* 
eg: {
    'my': 2,
    'name': 1,
    'Daniel': 1
}
*/
// Then from this, we can get the key with highest value and return the key (string)

// There is 2 ways to do this:
// 1. Beginner
const beginner = (stringsArray) => {

    // Create object to hold key:value pairs
    const commonStrings = {
        // Empty at start
    }

    // Check if the commonStrings object contains the key (string)
    // If true, increase the key value by one, else, add the key and set its value to 1
    stringsArray.forEach( str => {
        if (commonStrings[str] === undefined) {
            // The string is not in the commonStrings object
            commonStrings[str] = 1;
        }
        else {
            commonStrings[str] += 1;
        }
    });

    console.log(commonStrings);

    let maxValue = 0; // To keep track of the maximum count
    let maxEntry; // Holds the string with the maximum counts

    for (let commonString in commonStrings) {

        if (commonStrings[commonString] > maxValue) {
            // If the value of the string is greater than what is already in maxValue, assign new count
            maxValue = commonStrings[commonString];
            maxEntry = commonString
        }
    }

    return maxEntry;

}

// Advanced -> Using the reduce function
const advanced = (stringsArray) => {

    const counterObject = stringsArray.reduce( (accumulator, str) => {

        accumulator[str] = accumulator[str] === undefined ? 1 : accumulator[str] += 1;

        return accumulator;
    }, 
    {}); // The starting point of the reduce is an empty object

    // We then need to find the key with the highest value from the produced object -> counterObject
    // To transform an object into an array, we use the 'Object.entries' method

    return Object.entries(counterObject).reduce( (accumulator, obj) => { // the obj here is an array of key => value pairs eg: ["daniel": 2]

        return obj[1] > accumulator[1] ? obj : accumulator

    }, [null , 0])[0]; // We add the [0] because we want to access the KEY (string) which is in the first(0-th) position in the obj array
}

console.log("Beginner String counter: ", beginner("My name is daniel daniel githiomi".toLowerCase().split(" ")));
console.log("Advanced String counter: ", advanced("My name is daniel daniel githiomi".toLowerCase().split(" ")));
