console.log("==== HIGH ORDER ARRAY FUNCTIONS ====");

// An array of Person objects
const persons = [
    {
        name: 'John',
        age: 21
    },
    {
        name: 'Daniel',
        age: 19
    },
    {
        name: 'Margaret',
        age: 27
    },
    {
        name: 'Ted',
        age: 22
    },
    {
        name: 'Bob',
        age: 34
    },
    {
        name: 'Daniel',
        age: 22
    }
];

// NOTE: These methods do not make any changes to the original array object

// Some of the high order array functions in Javascript are:
// 1. map()
// 2. find()
// 3. filter()
// 4. some()
// 5. every()
// 6. reduce()
// 7. foreach()
// 8. includes()

// MAP, FILTER take in ONE PARAMETER (a lambda function)

// FILTER() function
// The filter function is used to filter the elements of the array and place relevant elements into a new array
// NB: Only elements that equate to TRUE are stored in the new array
const filteredPersons = persons.filter(
    (person) => {
        return person.age > 25;
        // This will filter out people whose age is > 25
        // The remaining people are added to the filtered list because the return statement returns TRUE
    }
);

console.log(filteredPersons);

// MAP() function
// The map() function is used to make changes to all the elements in the array and store them in a new array
// It can also be used to replace a normal FOR LOOP in order to find properties/attributes of each element in the array
const olderPeople = persons.map(
    person => {
        return `${person.name} is now ${person.age += 1} years old`;
        // This will add '1' to each person's age to make them '1' year older
    }
);

console.log(olderPeople);

// FIND() function
// This is used to find a single element in thw array
// It returns the FIRST element in the array that matches the criteria paased into the function
const foundPerson = persons.find(
    person => {
        return person.name === 'Daniel';
        // This will return the first 'Daniel' element in the array (with age 19 instead of 22)
    }
);

console.log(foundPerson)

// FOREACH() function
// The for each does not return anything but rather it iterates over the elements in the array
// Can be used to in place of a FOR loop
persons.forEach(
    person => {
        console.log(`${person.name} is ${person.age} years old`);
        // This acts as a replacement for the for loop
    }
);

// SOME() function
// The some function is used to check if the array it is called upon contains ANY element that matches the criteria
// It doesn't return a new array but rather returns TRUE/FALSE
const isYouth = persons.some(
    person => {
        return person.age > 18
        // Returns TRUE if one person is older than 18 years old hence is a YOUTH
        // As soon as one element matches the criteria, then it returns TRUE/FALSE on the whole array
    }
);

console.log(isYouth);

// EVERY() function
// Similar to the some() function, this returns TRUE/FALSE if the array it is called upon contains ALL elements that match the criteria
const isOld = persons.every(
    person => {
        return person.age > 60
        // This will return FALSE because in the array, there is not element(person) that is older than 60 years
    }
);

console.log(isOld);

// REDUCE() function
// The reduce function is used to aggregate a SINGLE value from all the elements in the array
// It performs operations on each element of the array and returns a single resultant value
const totalAge = persons.reduce(
    // It takes 2 parameters
    // 1. A combination of:
    // a. The variable name of the variable that will hold the aggregate value
    // b. The variable name of each element in the array.
    // 2. The starting value/point
    (totalAge, { name, age }) => {
        return totalAge + age;
    },
    0 // This is the starting point. The sum total will start from 0
)

console.log(totalAge);

// INCLUDES() function
// It is used for simple find() function on simple array objects
// The includes function takes a single item and checks where the item passed into the function is contained in the array
// It returns a boolean value of TRUE/FALSE if the item is contained in the array
let numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
];

const isInArray = numbers.includes(20);

console.log(isInArray); // Will return false because 20 is not in the array