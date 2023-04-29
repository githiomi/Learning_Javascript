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
)

console.log(filteredPersons);

// MAP() function
// The map() function is used to make changes to all the elements in the array and store them in a new array
// It can also be used to replace a normal FOR LOOP in order to find properties/attributes of each element in the array
const olderPeople = persons.map(
    person => {
        return `${person.name} is now ${person.age += 1} years old`;
        // This will add '1' to each person's age to make them '1' year older
    }
)

console.log(olderPeople);

// FIND() function
// This is used to find a single element in thw array
// It returns the FIRST element in the array that matches the criteria paased into the function
const foundPerson = persons.find(
    person => {
        return person.name === 'Daniel';
        // This will return the first 'Daniel' element in the array (with age 19 instead of 22)
    }
)

console.log(foundPerson)

// FOREACH() function
// The for each does not return anything but rather it iterates over the elements in the array
// Can be used to in place of a FOR loop
persons.forEach(
    person => {
        console.log(`${person.name} is ${person.age} years old`);
        // This acts as a replacement for the for loop
    }
)