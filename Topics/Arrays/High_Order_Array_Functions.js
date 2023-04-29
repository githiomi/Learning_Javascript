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
    }
];

// NOTE: These methods do not make any changes to the original array object

// Some of the high order array functions in Javascript are:
// 1. map()
// 2. 
// 3. filter()
// 4. some()
// 5. every()
// 6. reduce()

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
const olderPeople = persons.map(
    person => {
        return `${person.name} is now ${person.age += 1} years old`;
        // This will add '1' to each person's age to make them '1' year older
    }
)

console.log(olderPeople);